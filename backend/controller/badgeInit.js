const badge = require('../models/badges');

exports.badge = (req, res) => {
    const {name, imgUrl} = req.body;
    let badgeData = {
        name,
        imgUrl
    }
    let newBadge = new badge(badgeData);
    newBadge.save((err, badge) => {
        if(err){
            res.send(err);
        }    
        res.json(badge);
    });
}