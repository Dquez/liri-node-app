var Twitter = require('twitter');
var keys = require("./keys.js");
var fs = require("fs");
var twitterMod = {
    tweet: function () {
        var screen_name = "dvasquez63608";
        var client = new Twitter({
            consumer_key: keys.twitterKeys.consumer_key,
            consumer_secret: keys.twitterKeys.consumer_secret,
            access_token_key: keys.twitterKeys.access_token_key,
            access_token_secret: keys.twitterKeys.access_token_secret
        });
        client.get('statuses/user_timeline', screen_name, function (error, tweets, response) {
            if (!error) {
                for (var i = 0; i < tweets.length; i++) {
                    var prettyTime = tweets[i].created_at;
                    prettyTime = prettyTime.split("+", 1);
                    console.log(tweets[i].text + " created on: " + prettyTime);
                    var logTxt = "\n" + tweets[i].text + " created on: " + prettyTime;
                    fs.appendFile("log.txt", logTxt, function(err) {
                        if (error) {
                            console.log(error);
                        }
                    });
                }
            }
        })
    }
}
module.exports = twitterMod;