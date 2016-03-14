var port = process.env.PORT || 5000;
process.env.PWD = process.cwd()

var express = require("express");
var app = express();
var serveStatic = require("serve-static")

app.use(serveStatic(process.env.PWD, {
  'extensions': ['html']
}));

app.get("/", function(request, response) {
    response.send('/');
});
console.log('Listening on port ' + port);
app.listen(port);