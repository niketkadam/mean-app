// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const api = require('./server/routes/api');
const loginDatas = require('./server/models/users');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));


app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3002';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));var db
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://new:Niket123@ds127982.mlab.com:27982/data', (err, database) => {
  if (err) {return console.log(err)}
  else{
    console.log("hi");
  }
})
