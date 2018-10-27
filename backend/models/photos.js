const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let photoSchema = new Schema({
  URL: {
    type: String,
    required: true,
    unique: true
  },
  userID: {
    type: String,
    required: true,
    unique: false
  },
  badgeID: {
    type: String,
    required: true,
  },
  voters: [{
    type: String,
    required: false
  }]
});



var photo = mongoose.model('photo', photoSchema);

module.exports = photo;
