var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/store-api");

mongoose.Promise = Promise;

module.exports.Store = require("./store");
