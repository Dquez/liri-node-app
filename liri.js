var fs = require("fs");
var keys = require("./keys.js");
var twitterModule = require("./twitterModule");
var spotifyModule = require("./spotifyModule");
var omdbModule = require("./omdbModule");
var Spotify = require('node-spotify-api');
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
        doIt();
        debugger;
        break;
    default:
        console.log("nope");
}

function doIt() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        var outPut = data.split(",");
        // console.log(data[1]);
        // spotifyModule.spotify();
        console.log(outPut[1]);
        var spotify = new Spotify({
            id: "b1982e786b3c4df0b48dbd24bbf7f759",
            secret: "627111d972a64ad6adb0dd7ff3de9e7d"
        });
        spotify.search({
            type: 'track',
            query: outPut
        }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log("Artist name: " + data.tracks.items[0].artists[0].name +
                "\nSong name: " + data.tracks.items[0].name +
                "\nURL: " + data.tracks.items[0].external_urls.spotify +
                "\nAlbum name: " + data.tracks.items[0].album.name);
        });
        // var command = data.slice(0, 1);
    });
}


