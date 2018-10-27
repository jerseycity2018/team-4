const puzzle = require('puzzle');

exports.puzzle = (req, res) => {
    const badgeIDs = req.body;
    let newPuzzle = new puzzle("",badgeIDs);

    return newPuzzle;
}