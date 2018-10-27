const puzzle = require('badge');

exports.puzzle = (req, res) => {
    const {name, imgURL} = req.body;
    let newBadge = new puzzle(name,imgURL);

    return newBadge;
}