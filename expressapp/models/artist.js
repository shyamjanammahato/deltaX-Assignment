var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user_id: {type: String, require:true},
    name: {type: String, require:true},
    dateOfBirth: {type: Date, require:true},
    bio: {type: String, require: true},
    creation_dt: {type:Date, require:true}
});

module.exports = mongoose.model('Artist',schema);