var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user_id: {type: String, require:true},
    songName: {type: String, require:true},
    dateReleased: {type: Date, require:true},
    artwork: {type: String, require: true},
    artist: {type: Object, require: true},
    creation_dt: {type:Date, require:true}
});

module.exports = mongoose.model('Song',schema);