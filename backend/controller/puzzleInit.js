const puzzle = require('puzzle');

exports.puzzle = (req, res) => {
    const badgeIDs = req.body;
    let newPuzzle = new puzzle("",badgeIDs);

    newPuzzle.save((err, puzzle) => {
        if(err){
            res.send(err);
        }    
        res.json(puzzle);
    });
    return newPuzzle;
}