var path = require("path");

var userData = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(userData);
        
    })

    app.post("/api/friends", function(req, res){

        var newFriendScores = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;
        for(var i = 0; i < userData.length; i++){
            var scoresDiff = 0;
            for( var k = 0; k < newFriendScores.length; k++){
                scoresDiff += (Math.abs(parseInt(userData[i].scores[k]) - parseInt(newFriendScores[k])))
            }
            scoresArray.push(scoresDiff);
        }

        for(var i = 0; i < scoresArray.length; i++){
            if(scoresArray[i] <= scoresArray[bestMatch]){
                bestMatch = i;
            }
        }

        var bestFriend = userData[bestMatch];
        res.json(bestFriend);

        userData.push(req.body);

        // var newUser = req.body;

        // var newUserScores = newUser.scores;

        // var matchName = "";
        // var matchPic = "";
        // var matchNumber = "";

        // for( var i = 0; i < userData.length; i++ ){

        //     var bestMatch = 0;
                
        //         for( var k = 0; i < newUserScores.length; k++){
        //             bestMatch += Math.abs(userData[i].scores[k] - newUserScores[k]);

        //         }

        //         console.log(bestMatch)

        //         if( bestMatch < matchNumber ){

        //             matchNumber = bestMatch;
        //             matchName = userData.name;
        //             matchPic = userData.photo;
        //         }
        // }

        // userData.push(newUser);

        // res.json({
        //     status:"OK",
        //     matchName: matchName,
        //     matchPic:matchPic
        // })



    })

}

// Import the list of friend entries
// var friends = require('../data/friends.js');

// // Export API routes
// module.exports = function(app) {
// 	// console.log('___ENTER apiRoutes.js___');

// 	// Total list of friend entries
// 	app.get('/api/friends', function(req, res) {
// 		res.json(friends);
// });