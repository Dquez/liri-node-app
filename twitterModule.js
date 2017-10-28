var twitterMod = {
    tweet: function () {
        var keys = require("./keys.js");
        var screen_name = "dvasquez63608";
        var Twitter = require('twitter');
        var client = new Twitter({
            consumer_key: keys.consumer_key,
            consumer_secret: keys.consumer_secret,
            access_token_key: keys.access_token_key,
            access_token_secret: keys.access_token_secret
        });
        client.get('statuses/user_timeline', screen_name, function (error, tweets, response) {
            if (!error) {
                debugger;
                for (var i = 0; i < tweets.length; i++) {
                    var prettyTime = tweets[i].created_at;
                    prettyTime = prettyTime.split("+", 1);
                    console.log(tweets[i].text + " created on: " + prettyTime);
                }
            } else {
                console.log(error);
            }
        });

    }
}

module.exports = twitterMod;