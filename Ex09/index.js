const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(request, response) {
  response.send("Congrats you're using your first Node.js and Express as Web Server");
});

app.listen(port, function() {
  console.log(`The HTTP server is running on port ${port}`);
});