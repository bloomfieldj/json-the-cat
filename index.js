const fetchBreedDescription = require('./breedFetcher')

console.log(fetchBreedDescription);

let breed = process.argv[2];

fetchBreedDescription(breed);