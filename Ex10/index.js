const express = require('express');
const app = express();
const port = 3000;

let oneLinerJoke = require('one-liner-joke');
let getRandomJoke = oneLinerJoke.getRandomJoke();

app.get('/', function(request, response) {
  response.send("Congrats you're using your first Node.js and Express as Web Server");
});

app.listen(port, function() {
  console.log(`The HTTP server is running on port ${port}`);
});

app.get('/jokes/', function (request, response) {
    let jokeOne = oneLinerJoke.getRandomJoke();
    let jokeTwo = oneLinerJoke.getRandomJoke();
    let twoJokes = `Joke One: ${jokeOne.body} \n` + `Joke Two: ${jokeTwo.body}`;
    response.send(twoJokes);
})

app.get('/joke', function (request, response) {
    response.send(getRandomJoke.body);
})

app.post('/joke', function (request, response) {
    response.send("My jokes are too funny, I'm not getting any new ones from you");
})

app.put('/joke', function (request, response) {
    response.send("No, no, no... not changing my act, dude!");
})

app.delete('/joke', function (request, response) {
    response.send("Good jokes never get too old");
})

app.all('/joke', function (request, response) {
    response.send("I know I'm so good that you're looking for jokes everywhere");
})