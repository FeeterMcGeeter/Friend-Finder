// ===== REQUIRING DEPENDENCIES =====
var path = require("path");

module.exports = function(app) {

    // ===== GET REQUEST TO SURVEY PAGE =====
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // // ==== DEFAULTS TO THE HOME PAGE =====
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

};