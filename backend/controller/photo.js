const photo = require('../models/photos');
// const User = require('../models/photos');

exports.uploadPhoto = (req, res) => {
    const { URL, userID, badgeID} = req.body;
    let photoData = {
        URL,
        userID,
        badgeID,
        voters: []
    }
    let newPhoto = new photo(photoData);

    newPhoto.save((err, photo) => {
        if(err){
            res.send(err);
        }    
        res.json(photo);
    });

    exports.votePhoto = (req, res) => {
        const {photoID, voterID} = req.params;
        photo.findById(photoID, (err, photo) => {
            if(err) res.status(500).json({error: 'Unable to find User with that id'});     
            if(!photo) res.status(404).json({error: 'Could not find that user'}); 
            if(photo.voters.indexOf(voterID)>-1) res.status(500).json({error: 'User already voted'}); 
            photo.voters = photo.voters.push(voterID);    
            photo.save(error => {    
              if (error) res.status(500).json({error: 'internal server error while voting'});
        
              res.status(200).json({message: 'Successfuly voted'});
        
            });
        
          });
        
        };