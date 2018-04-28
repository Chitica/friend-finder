var path = require("path");

var friendList = require("../data/friends.js");

module.exports = function(app){
    app.get("api/friends", function(req, res){
        res.json(friendList);
    })

}
app.post("api/friends", function(req, res){
    var userInputs = req.body;
    console.log(JSON.stringify(userInputs));

    var userResponse = userInputs.scores;
    console.log(userResponse);
})
