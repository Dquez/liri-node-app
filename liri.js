var keys = require("./keys.js");
var twitterModule = require("./twitterModule");
// var spotifyModule = require("./twitterModule");
// var inspector = require("inspect-process");

var firstArg = process.argv[2];
// console.log(args);
debugger;
switch (firstArg) {
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

var userInput = "";
for (var i= 3; i < process.argv.length; i++ ){
    userInput += process.argv[i] + " ";
}

var noSong = "The Sign, Ace of Base";



var Spotify = require('node-spotify-api');

var spotify = new Spotify({
 id: "b1982e786b3c4df0b48dbd24bbf7f759",
 secret: "627111d972a64ad6adb0dd7ff3de9e7d"
});

spotify.search({ type: 'track', query: userInput }, function(err, data) {
 if (err) {
   return console.log('Error occurred: ' + err);
 }
 debugger;
console.log(data.tracks.items[0].artists[0].name); 
console.log(data.tracks.items[0].name);
console.log(data.tracks.items[0].external_urls);
console.log(data.tracks.items[0].album.name);
});


// This will show the following information about the song in your terminal/bash window

// Artist(s)

// The song's name

// A preview link of the song from Spotify

// The album that the song is from

// If no song is provided then your program will default to "The Sign" by Ace of Base.

