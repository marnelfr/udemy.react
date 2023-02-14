import React, {useState} from 'react';

import MoviesList from './components/Section14/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState(null)
  const fetchMovieHandler = async event => {
    event.preventDefault()
    setMovies([])
    const response = await fetch('https://swapi.dev/api/films')
    const data = await response.json()
    const transformedData = data.results.map(movie => {
      return {
        id: movie.episode_id,
        title: movie.title,
        releaseDate: movie.release_date,
        openingText: movie.opening_crawl
      }
    })
    setMovies(transformedData)
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        { movies && <MoviesList movies={movies} /> }
        { movies !== null && <p>Loading...</p> }
      </section>
    </React.Fragment>
  );
}

export default App;
