const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema ({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: { 
    type: String ,
    default: 'https://www.bootdey.com/img/Content/avatar/avatar1.png'
  },
  images: [{ img: { type: String } }],
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
  const query = {username: username}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}
//Update Avatar
module.exports.UpdateAvatarByUsername = function(username, newAvatar) {
  const query = {username: username}
  User.findOneAndUpdate(query, {avatar:newAvatar}, {upsert: true}, function(err, doc) {
    //if (err) return res.send(500, {error: err});
    //return res.send('Succesfully saved.');
  });
}

//Update Images List
module.exports.UpdateImagesListByUsername = function(username, newAvatar) {
  const query = {username: username}
  User.findOneAndUpdate(query, { $push: {images:{img:newAvatar}} }, {upsert: true}, function(err, doc) {
    //console.log("hhhhhhhae");
    //if (err) return res.send(500, {error: err});
    //return res.send('Succesfully saved.');
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
