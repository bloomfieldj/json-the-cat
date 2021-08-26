const request = require('request');

// 
const breed = process.argv[2];

const fetch = function (breed){  
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breed, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
  
  
  if (JSON.parse(body)['0']){
    const desc = JSON.parse(body)['0'].description;
    console.log(desc);  
  } else {
    console.log(null);
    }


  })

}

fetch();

module.exports = fetch ;