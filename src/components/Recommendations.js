import React from "react";

function Recommendations({ recommendations, onReset }) {
  return (
    <div>
      <h2>Recommendations</h2>
      {recommendations.map((movie) => (
        <div key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>
        </div>
      ))}
      <button onClick={onReset}>Back to Search</button>
    </div>
  );
}

export default Recommendations;
