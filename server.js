var express = require("express");

var app = express();


app.use(express.static( __dirname + "/build"));

app.get("*", function(req, res){
  res.sendFile(__dirname + "/build/index.html");
});
// Listen to port 3000
app.listen(process.env.PORT || 3000);