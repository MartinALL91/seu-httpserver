// content of index.js
const http = require('http');
const port = 3000;
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);
var tweet;

const requestHandler = (req, resp) => {
  T.get('statuses/home_timeline', function(err, data, response) {
	  if(!err){
	  	tweet = data[0].text;
	  } else {
	    tweet = "Error al buscar tweet";
	  }
	  resp.end(tweet);
	});
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
})