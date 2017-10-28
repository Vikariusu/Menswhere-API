// loads variables.env to be accessible by all files
require('dotenv').config({ path: 'variables.env' });

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var mongoose = require("mongoose");
mongoose.set("debug", true);
// connect to database
mongoose.connect(process.env.DATABASE);
mongoose.Promise = Promise;

var storeRoutes = require('./routes/stores');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.send("Hello from the root route");
})

app.use('/api/stores', storeRoutes);

app.listen(3000, function(){
  console.log("~ Staring the server ~");
})
