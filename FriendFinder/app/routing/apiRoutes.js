var friends = require("../data/friends");
var friendsArray = friends.friends;

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function (req, res) {
        var results = req.body;
        var scores = results.answers;
        var difference = [];
        var users = [];

        friendsArray.forEach(function (user) {
            var matchScore = user.answers;
            var totalDifference = 0;

            for (var i = 0; i < matchScore.length; i++) {
                totalDifference += Math.abs(matchScore[i] - scores[i]);
            };
            difference.push(totalDifference);
            difference.sort();
            topScore = difference[0];
            users.push({
                name: user.name,
                photo: user.photo,
                difference: totalDifference
            });
            var bestMatch = users.find(function (element) {
                return element.difference === topScore;
            });
            friendsArray.push(user);
            res.json(bestMatch);
        });
    });
};