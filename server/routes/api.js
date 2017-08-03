const express = require('express');
const router = express.Router();
const app = express();
const loginDatas = require('../models/users');
const jwt = require('jsonwebtoken'); 
var passport = require("passport");
var passportJWT = require("passport-jwt");
var LocalStrategy = require('passport-local').Strategy;
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

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
var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = 'tasmanianDevil';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('payload received', jwt_payload);
  // usually this would be a database call:
  var user = loginDatas[_.findIndex(loginDatas, {id: jwt_payload.id})];
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});

passport.use(strategy)

router.post('/add', function (req, res) {
  const myData = new loginDatas();
  myData.username = req.body.username;
  myData.password = req.body.password;
  myData.email = req.body.email;
  myData.save(function (err, data) {
    if (err) {
      res.status(401).send(err);
    }
    else {
      var token;
      // token = myData.generateJwt();
      res.status(200).json({ data: data })
    }
  })

});
router.post("/login", function (req, res) {
  if (!loginDatas) {
    res.status(401).json({ message: "no such user found" });
  }

  if (loginDatas.password === req.body.password) {
    var payload = { id: loginDatas.id };
    var token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.json({ message: "ok", token: token });
  } else {
    res.status(401).json({ message: "passwords did not match" });
  }
});
module.exports = router;
