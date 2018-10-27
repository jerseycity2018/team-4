const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let badgeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  imgUrl: {
    type: String,
    required: true,
    unique: true
  }
});



var badge = mongoose.model('badge', badgeSchema);

module.exports = badge;
