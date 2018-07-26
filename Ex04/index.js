let oneLinerJoke = require('one-liner-joke');
let getRandomJoke = oneLinerJoke.getRandomJoke();

console.log(`Joke: ` + getRandomJoke.body);
console.log(`Category: ` + getRandomJoke.tags);