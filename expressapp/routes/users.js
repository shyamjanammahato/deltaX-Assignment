var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');
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
    return res.statuc(501).json(err);
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

module.exports = router;
