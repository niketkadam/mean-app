const express = require('express');
const router = express.Router();
const app = express();
const loginDatas = require('../models/users');
router.get('/', (req, res) => {
  res.send('api works');
});

// const MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb://new:Niket123@ds127982.mlab.com:27982/data', (err, database) => {
//   if (err) return console.log(err)
//   db = database
//   app.listen(3002, () => {
//     console.log('listening on 3002')
//   })
// })

var mongoose = require("mongoose");
var db = mongoose.connect('mongodb://new:Niket123@ds127982.mlab.com:27982/data', (err, database) => {
  if (err) { return console.log(err) }
  else {
    console.log("hi");
  }
})
var schema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
});

var Blog = db.model('blog', schema)
console.log("Created model");
var User = new Blog({
  userName: "rahul",
  email: "ni.cvrce@gmail.com",
  password: "Rahul123",
});
User.save(function (error) {
  console.log("saved");

});

// router.get('/users', function (req, res) {
//     loginDatas.find({})
//         .exec(function (err, data) {
//             if (err) {
//                 console.log("server failed");
//             } else {
//                 res.json(data);
//             }
//         });
// });

// router.post('/user', function (req, res) {
//     var newUser = new loginDatas();
//     newUser.username = req.body.username;
//     newUser.password = req.body.password;
//     newUser.email = req.body.email;
//     newUser.save(function (err, data) {
//         if (err) {
//             console.log('server failed');
//         } else {
//             res.status(200).json({ msg: "user added successfully", username: newUser.username, email: newUser.email, status: 200 });
//         }
//     });
// });

module.exports = router;
