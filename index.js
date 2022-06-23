// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const Routes = require("./Routes")

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});




app.use("/api", Routes)
app.use((req, res) => {
  res.status(404).json({ error : "Invalid Date" })
})



// listen for requests :)
app.listen(3000, function () {
  console.log('Your app is listening on port ' + 3000);
});
