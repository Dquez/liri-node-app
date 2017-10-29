var Spotify = require('node-spotify-api');

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
            id: "b1982e786b3c4df0b48dbd24bbf7f759",
            secret: "627111d972a64ad6adb0dd7ff3de9e7d"
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
        });
    }
}

module.exports = spotifyMod;


// else {
//     spotify.search({
//         type: 'track',
//         query: userInput
//     }, function (err, data) {
//         if (err) {
//             return console.log('Error occurred: ' + err);
//         }
//         console.log("Artist name: " + data.tracks.items[0].artists[0].name +
//         "\nSong name: " + data.tracks.items[0].name +
//         "\nURL: " + data.tracks.items[0].external_urls.spotify +
//         "\nAlbum name: " + data.tracks.items[0].album.name);
//     });
// }