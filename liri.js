var keys = require("./keys.js");
var twitterModule = require("./twitterModule");
var spotifyModule = require("./twitterModule");
// var inspector = require("inspect-process");

var args = process.argv[2];
// console.log(args);
debugger;
switch (args) {
    case "my-tweets":
        // console.log("tweet");
        twitterModule.tweet();
        debugger;
        break;
    case "spotify-this-song":
        console.log("song");
        debugger;
        break;
    case "movie-this":
        console.log("movie");
        debugger;
        break;
    case "do-what-it-says":
        console.log("song");
        debugger;
        break;
    default:
        console.log("nope");
}