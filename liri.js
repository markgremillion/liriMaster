// import twitterKeys from "keys.js"
var spotifyKeys = require('./keys.js')
var twitterKeys = require('./keys.js')


// console.log(twitterKeys)
// console.log(twitterKeys.consumer_key)
console.log(spotifyKeys.client_secret)


var operator = process.argv[2]
// var variable = process.argv[3]

//gets the npm files needed
var request = require("request");
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
    id: '76a4b3e9fc2c49ef800dfbe329a24aca',
    secret: "f3671d7b654b41cbbea3f0d7290fc6b6"
  });


  var Twitter = require('twitter');
  // I couldn't get the export keys to work, so i just put it in the app itself to get it to work
 var client = new Twitter({
   consumer_key: "NIZb9OnYxyBDarU7GEAxs4iQj",
   consumer_secret: "wPrP1yThqSOQTDsvwuEmT5uMyaRgqwBnEXK8AJGOdOt7CLHz5s",
   access_token_key: "832320973999202305-i2Hpn1abGTygu0lGKGCAmURqiEHSSIe",
   access_token_secret: "AHR3m36wGwNCakfXKBeOsKDdd9tEqO6jZXXJv9ZP06jxp"
 });
 console.log(client.consumer_key)
  




switch (operator) {
    case operator="movie-this" :
     liriMovie();
        
        break;
    case operator="spotify-this-song":
    liriSong();
    break;
    case operator = "my-tweets":
    liriTwitter();
    break;
    default:
        break;

}

// Movie function
function liriMovie(){
    //gets the movie name
    var movieName = process.argv[3]
    //puts it into a url
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
   
    console.log(queryUrl)
    //gets the movie and makes sure there is no errors.
    request(queryUrl, function(error, response, body){

        if (!error && response.statusCode === 200){
            console.log("Movie Plot: " + JSON.parse(body).Plot)
        }
    })
}

// I get it to pull up the information, but whenever I use a for loop, it won't give me the correct information
function liriSong(){
    var songName = process.argv[3]
    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data.tracks.items[0]); 
      var songs = data.tracks.items;

      });

}

function liriTwitter(){
// after 15 hours of trying different things, setting up multiple accounts, ect, following the video exactly how they had it, 
//I still couldn't get this to work. Very frustrating 
    var params = {screen_name: 'MarkLiri'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        console.log(tweets);
        console.log(tweets.text)
      }
    });
    
}