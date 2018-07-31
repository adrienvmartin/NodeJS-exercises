const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/assets', express.static('public'));

app.listen(port, function () {
    console.log(`The HTTP server is running on port ${port}`);
});