var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var mongoose = require('mongoose');

var userSchema = mongoose.schema({
  username: {type: String, index: {unique:true}},
  password: String
});

var user = mongoose.model('User', userSchema);

userSchema.pre('save', function(next){
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.password, null, null).bind(this)
    .then(function(hash) {
      this.password = hash;
      next();
    });
});

User.prototype.comparePassword = function(attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.password, function(err, isMatch) {
    if (err){
      callback(err)
    }else{
      callback(null,isMatch)
    };  
  });
};

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function(){
    this.on('creating', this.hashPassword);
  },
  hashPassword: function(){
  }
});

module.exports = User;
