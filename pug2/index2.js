// Logging
const Logger = require('logplease');
const logger = Logger.create('utils');

// require the express module
const express = require('express');

// then create a express server
const app = express();

// specify the engine or load the template engine module in your app
app.set('view engine', 'pug')

// MongoDB
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

// when trying to add new items to database, the website will not load and gets an error, but when I close the server and restart it without the code it works fine and the new items are in the collection - why?

// configure the default route and send a text as response
app.get('/', (req, res) => {
    MongoClient.connect(url, function (err, client) {
        const db = client.db('comics');
        const collection = db.collection('superheroes');

        collection.find({}).toArray((error, documents) => {
            client.close();
            res.render('index2', { documents: documents });
        });
    });
});

// configure the port that express is going to listen to
app.listen(3000, function () {
    logger.info('Example app listening on port 3000!');
});

//testing for github