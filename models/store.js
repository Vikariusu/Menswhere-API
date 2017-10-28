var mongoose = require("mongoose");

var storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name cannot be blank!"
  },
  address: {
    type: String,
    required: "Address cannot be blank!"
  },
  description: {
    type: String,
    required: "Description cannot be blank!"
  },
  imageUrl: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})

var Store = mongoose.model('Store', storeSchema);

module.exports = Store;
