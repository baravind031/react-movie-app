const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.get('/movies/search', async (req, res) => {
  try {
    const { searchTerm } = req.query;
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=3be0bc37&s=${searchTerm}`
      
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error searching movies:', error);
    res.status(500).json({ error: 'An error occurred while searching movies' });
  }
});

app.get('/movies/details', async (req, res) => {
  try {
    const { imdbID } = req.query;
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=3be0bc37&i=${imdbID}`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error retrieving movie details:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while retrieving movie details' });
  }
});

app.get('/movies/recommendations', async (req, res) => {
  try {
    const { genre } = req.query;
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=3be0bc37&s=&type=movie&genre=${genre}`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error retrieving recommendations:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while retrieving recommendations' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
