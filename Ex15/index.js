const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (request, response) {
    response.json( {
        "status": 200,
        "message": "Request/response is okay"
    })
});

const requestTime = (req, res, next) => {
    const message = `Request: ${req.baseUrl} ${Date.now()}`;
    console.log(message);
    
    next();
  };

app.use(requestTime);

app.listen(port, function () {
    console.log(`The HTTP server is running on port ${port}`);
});