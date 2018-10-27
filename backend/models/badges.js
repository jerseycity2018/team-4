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

badgeSchema.pre('save', function (next) {
  console.log("Saving");
  this.name = this.name.toLowerCase();
  next();
});




var badge = mongoose.model('badge', badgeSchema);

module.exports = badge;
