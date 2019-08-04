//Install express server
const express = require('express');
const path = require('path');

const app = express();

const MongoClient = require('mongodb').MongoClient;

// Connection URL
// const url = 'mongodb://localhost:27017';
const url = 'mongodb://heroku_73x4q6hd:h0lak8cg0l0rujqjvnmkk4jjv2@ds133086.mlab.com:33086/heroku_73x4q6hd';

// Database Name
const dbName = 'heroku_73x4q6hd';
// const dbName = 'pui';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  insertDocuments(db, function() {
    client.close();
  });
  //client.close();
});

// const insertDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('documents1');
//   // Insert some documents
//   collection.insertMany([
//     {a : 1}, {a : 2}, {a : 3}
//   ], function(err, result) {
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/tsnproj'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/tsnproj/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
