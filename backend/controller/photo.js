const photo = require('../models/photos');

exports.uploadPhoto = (req, res) => {
    const { urlLink, userID, badgeID} = req.body;
    let puzzleData = {
        urlLink,
        userID,
        badgeID,
        voters: []
    }
    let newPuzzle = new puzzle(puzzleData);

    newPuzzle.save((err, puzzle) => {
        if(err){
            res.send(err);
        }    
        res.json(puzzle);
    });
}