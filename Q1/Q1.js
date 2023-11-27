class Movie
{
    constructor(movieName, studioName, rating)
    {
        this.MovieName = movieName;
        this.StudioName = studioName;
        this.Rating = rating || "PG";
    }
}

function getPG(movie)
{
    var arr = []
    for(var i of movie)
    {
        if(i.Rating == "PG")
            arr.push(i.MovieName);
    }
    return arr;
}

var leo = new Movie("Leo", "Lyca", "PG13");
var jawan = new Movie("Jawan", "Oscar Films", "PG13");
var toyStory = new Movie("Toy Story", "Disnep", "PG");
var MI7 = new Movie("Mission Immpossible 7", "Skydance");
var casinoRoyale = new Movie(("Casino Royale", "Eon Production", "PG13"));

console.log("The Movies which has rating of PG are: ", getPG([leo,jawan,toyStory,MI7]));