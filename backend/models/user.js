const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: false
  },
  updatedAt: {
    type: Number,
    required: false
  },
  photos: [{
    type: String
  }],
  badges : [{
    type: String,
    date_earned: Date,
    redeemed: Boolean
  }],
  puzzles: [{
    type: String,
    date_earned: Date,
    redeemed: Boolean
  }]
});

userSchema.pre('save', function (next) {
  console.log("Saving");
  this.email = this.email.toLowerCase();
  let currentDate = new Date().getTime();
  this.updatedAt = currentDate;
  if (!this.created_at) {
    this.createdAt = currentDate;
  }
  next();
});


var user = mongoose.model('user', userSchema);

module.exports = user;
