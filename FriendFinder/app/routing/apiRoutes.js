// ===== REQUIRING THE FRIENDS.JS DATA =====
var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var userScore = req.body.scores;
        var scoresArray = [];
        var bestMatch = 0;

        // ===== LOOPING THRU THE USER'S SCORES AND COMPARING TO SCORES FROM FRIENDS.JS ===== 
        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            for (var j = 0; j < userScore.length; j++) {

                // ===== CREATING ABSOLUTE NUMBERS TO AVOID NEGATIVE RESULTS =====
                diff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScore[j])));
            }
            scoresArray.push(diff);
        }
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }

        // ===== RETURNS THE BEST MATCH =====
        var userMatch = friends[bestMatch];
        res.json(userMatch);
        friends.push(req.body);
    })
};
