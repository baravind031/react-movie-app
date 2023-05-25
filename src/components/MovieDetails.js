import React from "react";

function MovieDetails({ movie }) {
  return (
    <div>
      <h2>Movie Details</h2>
      <h3>{movie.Title}</h3>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Director: {movie.Director}</p>
      <p>Actors: {movie.Actors}</p>
      <p>IMDB Rating: {movie.imdbRating}</p>
    </div>
  );
}

export default MovieDetails;


