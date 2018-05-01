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
       
    })
}
