var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("app/public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});