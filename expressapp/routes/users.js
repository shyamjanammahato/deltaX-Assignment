var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Song = require('../models/song');
var Artist = require('../models/artist');
var passport = require('passport');

var multer = require('multer');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//for register
router.post('/signup',function(req,res,next){
  addToDB(req, res);
});

async function addToDB(req,res){
  var user = new User({
    email: req.body.email,
    username: req.body.username,
    password: User.hashPassword(req.body.password),
    creation_dt: Date.now() 
  });

  try{
    doc = await user.save();
    return res.status(201).json(doc);
  }
  catch(err){
    return res.status(501).json(err);
  }
}

// for login
router.post('/signin',function(req, res, next){
  passport.authenticate('local', function(err, user, info) {
    if (err) { return res.status(501).json(err); }
    if (!user) { return res.status(501).json(info); }
    req.logIn(user, function(err) {
      if (err) { return res.status(501).json(err); }
      return res.status(200).json({message: 'Signin Successful.'});
    });
  })(req, res, next);
});

//user can get currently logged in user details
router.get('/homepage', isValidUser, function(req, res, next){
  return res.status(200).json(req.user);
});

// passport middleware to check whether user is logged in or not
function isValidUser(req, res, next){
  if(req.isAuthenticated()) next();
  else return res.status(401).json({message: 'Unauthorized Request'});
}

//to logout
router.get('/logout',isValidUser, function(req, res, next){
  req.logout();
  return res.status(200).json({message: 'Logout Successfully.'});
})

// add new artists
router.post('/add-new-artist',function(req, res, next){
  addArtistToDB(req, res);
});
// add artist to the database
async function addArtistToDB(req,res){
  var artist = new Artist({
    user_id: req.body.userId,
    name: req.body.artistName,
    dateOfBirth: req.body.dateOfBirth,
    bio: req.body.bio,
    creation_dt: Date.now() 
  });
  try{
    doc = await artist.save();
    return res.status(201).json(doc);
  }
  catch(err){
    return res.status(501).json(err);
  }
}
//get artists
router.get('/artists',function(req, res, next){
  Artist.find({},{_id: 1, name: 1},(err,docs) => {
    if(!err) {res.send(docs);}
    else { console.log('Error in retrieving Artists: ' + JSON.stringify(err, undefined, 2));}  
  });
});

var store = multer.diskStorage({
  destination:function(req,file,cb){
      cb(null, './uploads');
  },
  filename:function(req,file,cb){
      cb(null, Date.now()+'.'+file.originalname);
  }
});

var upload = multer({storage:store}).single('file');

//post addNew Song
router.post('/add-song',function(req, res){
  addSongToDB(req, res);
});
async function addSongToDB(req, res){
  upload(req,res,function(err){
    var song = new Song({
      user_id: req.body.userId,
      songName: req.body.songName,
      dateReleased: req.body.dateReleased,
      artwork: req.body.artwork,
      artist: req.body.artists,
      originalname:req.file.originalname, 
      uploadname:req.file.filename,
      creation_dt: Date.now() 
    });
    if(err){
        return res.status(501).json({error:err});
    }
    //do all database record saving activity
    try{
      doc = await song.save();
      return res.status(201).json(doc);
    }
    catch(err){
      return res.status(501).json(err);
    }
  }); 
}

module.exports = router;
