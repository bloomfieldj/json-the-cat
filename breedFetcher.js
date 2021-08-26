const request = require('request');
let breed = process.argv[2];

const fetch = function (){
  
  const data = request("https://api.thecatapi.com/v1/breeds/search?q=" + breed, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  const data = JSON.parse(body);
  console.log(data['0'].description, err => {
    if (err) {
      console.error(err);
      return
    }
  })
  
  })

  return data;
}

fetch();