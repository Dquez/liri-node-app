var keys = require("./keys.js");
var twitterModule = require("./twitterModule");
var spotifyModule = require("./spotifyModule");
var omdbModule = require("./omdbModule");
var doWhatItSays = require("./doItModule");
// var inspector = require("inspect-process");

var firstArg = process.argv[2];
switch (firstArg) {
    case "my-tweets":
        twitterModule.tweet();
        break;
    case "spotify-this-song":
        spotifyModule.spotify();
        break;
    case "movie-this":
        omdbModule.omdb();
        break;
    case "do-what-it-says":
        doWhatItSays.doIt();
        break;
    default:
        console.log("Try again buckaroo");
}