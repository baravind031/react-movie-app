import React from "react";

function SearchResults({ results, onSelectMovie }) {
  return (
    <div>
      <h2>Search Results</h2>
      {results.map((movie) => (
        <div key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>
          <button onClick={() => onSelectMovie(movie.imdbID)}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
