var express = require("express");
var router = express.Router();
var db = require("../models");

router.get('/', function(req, res){
  db.Store.find()
  .then(function(stores){
    res.json(stores);
  })
  .catch(function(err){
    res.send(err);
  })
});

router.post("/", function(req, res){
  console.log(req.body);
  db.Store.create(req.body)
  .then(function(newStore){
    res.status(201).json(newStore);
  })
  .catch(function(err){
    res.send(err);
  })
});

router.get("/:storeId", function(req, res){
  db.Store.findById(req.params.storeId)
  .then(function(foundStore){
    res.json(foundStore);
  })
  .catch(function(err){
    res.send(err);
  })
});

module.exports = router;
