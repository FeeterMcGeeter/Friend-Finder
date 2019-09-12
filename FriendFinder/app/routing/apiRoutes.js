var path = require("path");
var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var results = req.body;
        results.name = results.name.replace(/\s+/g, "");
        results.photo = results.photo.replace(/\s+/g, "");

        convertToInteger(results.scores);

        var newScores = results.scores;
        var nameMatch = "";
        var photoMatch = "";
        var totalDifference = 10000;

        for (var i = 0; i < friends.length; i++) {
            var difference = 0;

            for (var j = 0; j < friends[i].length; j++) {
                difference += Math.abs(friends[i].scores[j] - newScores[j]);
            }

            if (difference < totalDifference) {
                totalDifference = difference;
                nameMatch = friends[i].name;
                photoMatch = friends[i].photo;
            }
        }

        friends.push(results);
        res.json({
            status: "OK",
            nameMatch: nameMatch,
            photoMatch = photoMatch
        })
    })
};

function convertToInteger(results) {
    for (var k = 0; k < results.length; k++) {
        results[k] = parseInt(results[k]);
    }
};