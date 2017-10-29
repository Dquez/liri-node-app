var fs = require("fs");
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotifyMod = {
    spotify: function () {
        var userInput = "";
        for (var i = 3; i < process.argv.length; i++) {
            userInput += process.argv[i] + " ";
        }
        var noSong = "The Sign, Ace of Base";
        if (process.argv.length == 3) {
            userInput = noSong;
        }
        var spotify = new Spotify({
            id: keys.spotifyKeys.id,
            secret: keys.spotifyKeys.secret
        });
        spotify.search({
            type: 'track',
            query: userInput
        }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log("Artist name: " + data.tracks.items[0].artists[0].name +
                "\nSong name: " + data.tracks.items[0].name +
                "\nURL: " + data.tracks.items[0].external_urls.spotify +
                "\nAlbum name: " + data.tracks.items[0].album.name);
            var logTxt = "\nArtist name: " + data.tracks.items[0].artists[0].name +
                "\nSong name: " + data.tracks.items[0].name +
                "\nURL: " + data.tracks.items[0].external_urls.spotify +
                "\nAlbum name: " + data.tracks.items[0].album.name;
            fs.appendFile("log.txt", logTxt, function (error) {
                if (error) {
                    console.log(error);
                }
            });
        });
    }
}
module.exports = spotifyMod;