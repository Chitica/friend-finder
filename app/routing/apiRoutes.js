var path = require("path");

var friendList = require("../data/friends.js");

module.exports = function(app){
    app.get("api/friends", function(req, res){
        res.json(userData);
    })

    app.post("api/friends", function(req, res){
        var userData = req.body;
        console.log(JSON.stringify(userData));

        var userResponse = userData.scores;
        console.log(userResponse);
    })

}