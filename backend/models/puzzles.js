const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let puzzleSchema = new Schema({
  businessID: {
    type: String,
    required: true,
    unique: true
  },
  badgeIDs: [{
    type: String,
    required: true,
    unique: true
  }]
});

puzzleSchema.pre('save', function (next) {
  let currentDate = new Date().getTime();
  this.updatedAt = currentDate;
  if (!this.created_at) {
    this.createdAt = currentDate;
  }
  next();
});


var puzzle = mongoose.model('puzzles', puzzleSchema);

module.exports = puzzle;
