var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));

require("./routing/htmlRoutes.js")(app);
require("./routing/apiRoutes.js")(app);

app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});