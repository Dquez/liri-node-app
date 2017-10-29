var request = require("request");
var omdbMod = {
  omdb: function () {
    var movie = "";
    var noMovie = "Mr. Nobody";
    var args = process.argv;
    for (var i = 2; i < args.length; i++) {
      if (i > 3) {
        movie = movie + "+" + args[i];
      } else if (i == 3) {
        movie = movie += args[i];
      } else if (args.length == 3) {
        movie = movie += "Mr. Nobody";
      }
    }
    var movieURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";
    request(movieURL, function (error, response, body) {
      if (error) {
        console.log("Error occurred: " + error);
      }
      else if (!error && response.statusCode === 200) {
        console.log("Movie title: " + JSON.parse(body).Title +
          "\nRelease date: " + JSON.parse(body).Released +
          "\nIMDB rating: " + JSON.parse(body).imdbRating +
          "\nRotten Tomatoes rating: " + JSON.parse(body).Ratings[1].Value +
          "\nCountry where movie was produced: " + JSON.parse(body).Country +
          "\nLanguage: " + JSON.parse(body).Language +
          "\nPlot: " + JSON.parse(body).Plot +
          "\nActors: " + JSON.parse(body).Actors);
      }
    });
  }
}
module.exports = omdbMod;