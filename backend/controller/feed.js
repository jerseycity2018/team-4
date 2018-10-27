const Photo = require('../models/photos');
const Badge = require('../models/badges');


exports.getFeed = (req, res) => {

    Photo.find({}, {}, function(err, posts) {
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
        console.log(badgesArray);
        var responseData = [];
        console.log(posts);
        for(var i = 0; i< posts.length; i++){
            responseData.push({
                url: posts[i].URL,
                numVotes: posts[i].voters.length,
                badgeName: badges[i].name,
                voteUrl: "http://localhost:3001/api/photo/vote/photoID=" + posts[i]._id
            })
        }
        console.log(responseData);
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
