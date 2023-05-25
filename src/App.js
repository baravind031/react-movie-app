import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./components/SearchResults";
import MovieDetails from "./components/MovieDetails";
import Recommendations from "./components/Recommendations";
import "./App.css";


function App() {
     const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
     const [selectedMovie, setSelectedMovie] = useState(null);
     const [recommendations, setRecommendations] = useState([]);

   const searchMovies = async () => {
     
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=3be0bc37&s=${searchTerm}`
      );
      setSearchResults(response.data.Search || []);
    
  };

  const selectMovie = async (imdbID) => {
     
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=3be0bc37&i=${imdbID}`
      );
      setSelectedMovie(response.data);
      getRecommendations(response.data.Genre);
  };

  const getRecommendations = async (genre) => {
    
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=3be0bc37&s=&type=movie&genre=${genre}`
      );
      setRecommendations(response.data.Search || []);
    
  };

  const resetSelectedMovie = () => {
    setSelectedMovie(null);
    setRecommendations([]);
  };

  return (
    <div className="container">
      <h1>Find your Movie </h1>
      {! selectedMovie ? (
        <>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={searchMovies}>Search</button>
          <SearchResults
            results={searchResults}
            onSelectMovie={selectMovie}
          />
        </>
      ) : (
        <>
          <MovieDetails movie={selectedMovie} />
          <Recommendations
            recommendations={recommendations}
            onReset={resetSelectedMovie}
          />
        </>
      )}
    </div>
  );
}

export default App;

