let api = 'http://www.omdbapi.com/?apikey=2f7ef1bd&t=';

fetch(api).then((response) => {
    return response.json();
}).then((moviedata) => {
    console.log(moviedata);
})

let title = document.getElementById('title');
let date = document.getElementById('date');
let actors = document.getElementById('actors');
let director = document.getElementById('director');
let poster = document.getElementById('poster');
let desc = document.getElementById('desc');
let collection = document.getElementById('collection');
let ratings = document.getElementById('ratings');
let genre = document.getElementById('genre');




function searchMovie() {
    let movieName = document.getElementById('movieName');
    let query = api + movieName.value;
    fetch(query).then((response) => {
        return response.json();
    }).then((movieData) => {
        console.log(movieData);
        title.innerText = movieData.Title;
        genre.innerText = "Genre: " + "" + movieData.Genre;
        date.innerHTML = "Released On " + " " + movieData.Released;
        collection.innerText = "Box Office collection: " + " " + movieData.BoxOffice;
        director.innerText = "Director: " + " " + movieData.Director;
        ratings.innerText = "Imdb: " + " " + movieData.imdbRating;
        actors.innerText = "Actors: " + " " + movieData.Actors;
        desc.innerText = "Description: " + " " + movieData.Plot;
        poster.src = movieData.Poster;


    })

}

