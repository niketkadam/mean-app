const express = require('express');
const router = express.Router();
const app = express();
const loginDatas = require('../models/users');

router.get('/', (req, res) => {
  res.send('api works');
});

var mongoose = require("mongoose");
var db = mongoose.connect('mongodb://new:Niket123@ds127982.mlab.com:27982/data', (err, database) => {
  if (err) { return console.log(err) }
  else {
    console.log("hi");
  }
})
// var mongoose = require('mongoose');

// var UserSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });
// var User = mongoose.model("User", UserSchema);

router.post('/add', function(req, res) {
  var myData = new loginDatas();
   myData.username=req.body.username;
   myData.password=req.body.password;
  myData.save(function(err,data){
     if(err){
       res.status(401).send(err);
     }
     else{
      res.status(200).json({data:data})
     }
   })
   
});
module.exports = router;
