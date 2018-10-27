const badge = require('badge');

exports.badge = (req, res) => {
    const {name, imgURL} = req.body;
    let newBadge = new badge(name,imgURL);
    newBadge.save((err, badge) => {
        if(err){
            res.send(err);
        }    
        res.json(badge);
    });
    return newBadge;
}