const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, function(err, client) {
	const db = client.db('comics');
  const collection = db.collection('superheroes');
  useNewUrlParser: true;

	collection.find({}).toArray((error, documents) => {
		console.log(documents);
		client.close();
	});
});

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	MongoClient.connect(url, function(err, client) {
		const db = client.db('comics');
		const collection = db.collection('superheroes');

		collection.find({}).toArray((error, documents) => {
			client.close();
			res.render('index', { documents: documents });
		});
	});
});

app.get('/about', (req, res) => {
  res.render('about', {title: 'About', message: 'About This Page'});
});

app.listen(3000);