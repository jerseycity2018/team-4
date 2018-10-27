const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let photoSchema = new Schema({
  linkToStorage: {
    type: String,
    required: true,
    unique: true
  },
  uploader: {
    type: String,
    required: true,
    unique: true
  },
  badgeID: {
    type: String,
    required: true,
    unique: true
  },
  numVotes: {
    type: Number,
    required: false
  },
  voters: [{
    type: userSchema,
    required: false
  }]
});

photoSchema.pre('save', function (next) {
  let currentDate = new Date().getTime();
  this.updatedAt = currentDate;
  if (!this.created_at) {
    this.createdAt = currentDate;
  }
  next();
});


var photo = mongoose.model('photo', photoSchema);

module.exports = photo;
