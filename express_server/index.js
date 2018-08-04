const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.get('/about', (req, res) => {
  res.render('about', {title: 'About', message: 'About This Page'});
});

app.listen(3000);