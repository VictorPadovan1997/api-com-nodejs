var mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

const  userSchema = new Schema({
    login:{type:String, required : true},
    email:{type:String, required : true},
    senha:{type:String, required : true},
    signUpDate: {type: Date, default: Date.now()}
    
});

//Registration
UserSchema.methods.generateHash = function(senha) {
  return bcrypt.hashSync(senha, bcrypt.genSaltSync(8), null);
};

//Login
UserSchema.methods.validPassword = function(senha) {
  return bcrypt.compareSync(senha, this.senha);
};

module.exports = mongoose.model('User', UserSchema);