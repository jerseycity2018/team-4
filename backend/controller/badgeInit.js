const badge = require('../models/badges');

exports.badge = (req, res) => {
    const {name, imgURL} = req.body;
    let badgeData = {
        name,
        imgURL
    }
    let newBadge = new badge(badgeData);
    newBadge.save((err, badge) => {
        if(err){
            res.send(err);
        }    
        res.json(badge);
    });
}