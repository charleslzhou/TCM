var port = process.env.PORT || 5000;
process.env.PWD = process.cwd()

var express = require("express");
var app = express();

app.use(express.static(process.env.PWD));
app.get("/", function(request, response) {
    response.send('');
});
console.log('Listening on port ' + port);
app.listen(port);