const badge = require('badge');

exports.badge = (req, res) => {
    const {name, imgURL} = req.body;
    let newBadge = new badge(name,imgURL);

    return newBadge;
}