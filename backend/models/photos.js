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
  voters: [{
    type: String,
    required: false
  }]
});



var photo = mongoose.model('photo', photoSchema);

module.exports = photo;
