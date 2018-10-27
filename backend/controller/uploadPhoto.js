const photo = require('../models/photos');

exports.puzzle = (req, res) => {
    const { badgeIDs} = req.body;
    let puzzleData = {
        businessId : "1234",
        badgeIDs
    }
    let newPuzzle = new puzzle(puzzleData);

    newPuzzle.save((err, puzzle) => {
        if(err){
            res.send(err);
        }    
        res.json(puzzle);
    });
}