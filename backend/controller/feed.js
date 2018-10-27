const Photo = require('../models/photos');
// const User = require('../models/photos');

exports.uploadPhoto = (req, res) => {
    const { URL, userID, badgeID} = req.body;
    console.log(req.body);
    let photoData = {
        URL,
        userID,
        badgeID,
        voters: []
    }
    let newPhoto = new Photo(photoData);

    newPhoto.save((err, photo) => {
        if(err){
            res.send(err);
        }    
        res.json(photo);
    });
}

    exports.votePhoto = (req, res) => {
        console.log(req.params);
        const {photoID} = req.params;
        const {userID} = req.body;
        Photo.findById(photoID, (err, photo) => {
            if(err) res.status(500).json({error: 'Unable to find photo with that id'}); 
            else if(photo.voters.includes(userID)) res.status(500).json({error: 'User already voted'});
            else{
                photo.voters.push(userID);    
                console.log(photo.voters.includes(userID));
                photo.save(error => {    
                if (error) res.status(500).json({error: 'internal server error while voting'});
            
                res.status(200).json({message: 'Successfuly voted'});
            
            });
        }
        
          });
        };