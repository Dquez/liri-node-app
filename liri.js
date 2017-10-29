var keys = require("./keys.js");
var twitterModule = require("./twitterModule");
var spotifyModule = require("./spotifyModule");
var omdbModule = require("./omdbModule");
// var inspector = require("inspect-process");

var firstArg = process.argv[2];

debugger;
switch (firstArg) {
    case "my-tweets":
        twitterModule.tweet();
        debugger;
        break;
    case "spotify-this-song":
        spotifyModule.spotify();
        debugger;
        break;
    case "movie-this":
        omdbModule.omdb();
        debugger;
        break;
    case "do-what-it-says":
        console.log("song");
        debugger;
        break;
    default:
        console.log("nope");
}