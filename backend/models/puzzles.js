const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let puzzleSchema = new Schema({
  businessID: {
    type: String,
    required: false,
    unique: true
  },
    badgeIDs: {
    type: String,
    required: true,
    unique: true
    }
});



var puzzle = mongoose.model('puzzles', puzzleSchema);

module.exports = puzzle;
