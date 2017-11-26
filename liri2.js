var keys = require('./keys.js')

var Twitter = require('twitter')

var client = new Twitter(keys.twitterKeys);

var params = {screen_name: 'MarkLiri'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
    if(!error){
        console.log(tweets)

        for (var i=0; i=tweets.length; i++){
            console.log(tweets[i].created_at.text);
            console.log(tweets[i].text);
        }
    }
});

