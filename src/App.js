import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";
import Detail from "./components/Details";
import "./App.css";
function App() {
const [state, setState] = useState({
	s: "sherlock",
	results: [],
	selected: {},
});
const apiurl = "https://www.omdbapi.com/?apikey=a2526df0";
// const apiurl='http://www.omdbapi.com/?i=tt3896198&apikey=3be0bc37';
const searchInput = (e) => {
	let s = e.target.value;

	setState((prevState) => {
	return { ...prevState, s: s };
	});
};

const search = (e) => {
	if (e.key === "Enter") {
	axios(apiurl + "&s=" + state.s).then(({ data }) => {
		let results = data.Search;

		console.log(results);

		setState((prevState) => {
		return { ...prevState, results: results };
		});
	});
	}
};

const openDetail = (id) => {
	axios(apiurl + "&i=" + id).then(({ data }) => {
	let result = data;

	setState((prevState) => {
		return { ...prevState, selected: result };
	});
	});
};

const closeDetail = () => {
	setState((prevState) => {
	return { ...prevState, selected: {} };
	});
};

return (
	<div className="App">
	<header className="App-header">
		<h1>PVR</h1>
	</header>
	<main>
		<Search searchInput={searchInput} search={search} />

		<Results results={state.results} openDetail={openDetail} />

		{typeof state.selected.Title != "undefined" ? (
		<Detail selected={state.selected} closeDetail={closeDetail} />
		) : (
		false
		)}
	</main>
	</div>
);
}

export default App;




// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import MovieListHeading from './Components/MovieListHeading';
// import SearchBox from './Components/SearchBox';

// const App = () => {
// 	const [movies, setMovies] = useState([]);
//  const [searchValue, setSearchValue] = useState('');
// const getMovieRequest = async (searchValue) => {

//     const url =` http://www.omdbapi.com/?s=${searchValue}&apikey=3be0bc37`;

//     // The fetch function is used to send a GET request to the specified url and 
//     // The await keyword is used to pause the execution of the function until the response is received
//     // The response object contains the HTTP response received from the API. 
// 		const response = await fetch(url);
// 		const responseJson = await response.json();

// // The response object contains the HTTP response received from the API
// // The responseJson object contains the JSON data returned from the API
// 		if (responseJson.Search) {
// 			setMovies(responseJson.Search);
// 		}

//     //  setMovies update function need to write a code to update the movies
// 	};


// 	return (
// 		<div className='container-fluid movie-app'>  

     
// 		  	<div className='row d-flex align-items-center mt-4 mb-4'>

//           {/*  The MovieListHeading component is responsible for rendering a title for the movie */}
// 				<MovieListHeading heading='Movies'/>

//         {/* The SearchBox componentform that 
//         allows users to input a search query and search action will be done */}
// 				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
// 			 </div>			 
// 		</div>
// 	);
// };
// export default App;
