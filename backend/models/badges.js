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
  let currentDate = new Date().getTime();
  this.updatedAt = currentDate;
  if (!this.created_at) {
    this.createdAt = currentDate;
  }
  next();
});


var badge = mongoose.model('badge', badgeSchema);

module.exports = badge;
