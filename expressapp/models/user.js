var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var schema = new Schema({
    username: {type: String, require:true},
    email: {type: String, require:true},
    password: {type: String, require: true},
    creation_dt: {type:Date, require:true}
});

// encrypting the password while registering user
schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}
//decrypting the pasword while logging user
schema.methods.isValid = function(hashedpassword){
    return bcrypt.compareSync(hashedpassword, this.password);
}

module.exports = mongoose.model('User',schema);