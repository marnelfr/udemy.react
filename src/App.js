import React, {useState} from 'react';

import MoviesList from './components/Section14/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const fetchMovieHandler = event => {
    event.preventDefault()
    fetch('https://swapi.dev/api/films').then(response => {
      return response.json()
    }).then(data => {
      const transformedData = data.results.map(movie => {
        return {
          id: movie.episode_id,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl
        }
      })
      setMovies(transformedData)
    })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
