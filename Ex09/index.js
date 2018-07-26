const express = require('express');
const http = require('http');
const port = 3000;
const app = express();

app.listen(3000, function () {
    console.log('This HTTP server is running on port 3000');
});

app.get('/', function (request, response) {
    response.send("Congrats, you're using your first Node.js and Express as Web Server");
});

const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log(`Unable to start the server on port ${port}`, err)
    }

    console.log(`This HTTP server is running on port ${port}`)
})
