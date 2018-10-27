const Photo = require('../models/photos');
const Badge = require('../models/badges');


exports.getFeed = (req, res) => {

    Photo.find({}, {}, { sort: { 'created_at' : -1 }}, function(err, posts) {
        var counter =0;
        response =[]
        // posts.forEach((post)=>{
        //     console.log(posts)
        // }
        IDs =[]
        var returnFeed = [
        ]
        posts.forEach((post)=>{
            IDs.push(post.badgeID);
        });
        // var URL = post.URL;
        var badgesArray = [];
        Badge.find({'_id' : {$in:IDs}}, (err, badges)=>{
        console.log(badges)
        badges.forEach((badge) => {
            badgesArray.push(badge.name);
        })
        var responseData = [];
        for(var i = 0; i< posts.length; i++){
            responseData.push({
                url: posts[i].URL,
                numVotes: posts[i].voters.length,
                badgeName: badges[i].name,
                voteUrl: "http://localhost:3000/api/vote/photoID=" + posts[i]._id
            })
        }
        res.json(responseData)
        // let photoData = {
        //     URL, 
        //     badgeName: badge.name, 
        //     numVotes:post.voters.length };
        //     console.log(photoData);
        //  response.push(photoData);
         counter++;
         if(counter >=20)
            res.json(response);
        });
        })
      
}