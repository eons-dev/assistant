var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function assist () {
  let endpoint = ""
  let ret = "";
  
  let data = {
    "name": "Test Shoes",
    "description": "Test shoes that get POSTed to the server. They will not persist.",
    "price": {
      "value": 65,
      "currencyType": {
        "currencyCode": "USD",
        "prefixSymbol": "$"
      }
    },
    "type": "Boot"
  };
  
  let options = {
    passAsJson: true, 
    returnHeaders: true,
    format: 'json'
  };

  let response = http.postUrl(config.get('remote.url')+endpoint, data, options);
  console.log ("response = " + response)

  if (response.status !== 200) {
    console.log("There was an error.");
  }

  parsedResponsed = response.parsed;

  return ret;
}