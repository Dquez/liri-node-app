var fs = require("fs");
var Spotify = require('node-spotify-api');
var doWhatItSays = {
    doIt: function doIt() {
        fs.readFile("random.txt", "utf8", function (error, data) {
            var outPut = data.split(",");
            var spotify = new Spotify({
                id: "b1982e786b3c4df0b48dbd24bbf7f759",
                secret: "627111d972a64ad6adb0dd7ff3de9e7d"
            });
            spotify.search({
                type: 'track',
                query: outPut[1]
            }, function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }
                console.log("\n \nArtist name: " + data.tracks.items[0].artists[0].name +
                    "\nSong name: " + data.tracks.items[0].name +
                    "\nURL: " + data.tracks.items[0].external_urls.spotify +
                    "\nAlbum name: " + data.tracks.items[0].album.name);

                var logTxt = "Artist name: " + data.tracks.items[0].artists[0].name +
                    "\nSong name: " + data.tracks.items[0].name +
                    "\nURL: " + data.tracks.items[0].external_urls.spotify +
                    "\nAlbum name: " + data.tracks.items[0].album.name + "\n";
                fs.appendFile("log.txt", logTxt, function (error) {
                    if (error) {
                        console.log(error);
                    }
                });
            });
        });
    }
}
module.exports = doWhatItSays;