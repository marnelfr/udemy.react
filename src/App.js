import React, {useState} from 'react';

import MoviesList from './components/Section14/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchMovieHandler = async event => {
    event.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch('https://swapi.dev/api/films')
      if(!response.ok) {
        throw new Error("Couldn't get data")
      }
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
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }

  let content = <p>No movie found.</p>

  if(movies.length) {
    content = <MoviesList movies={movies} />
  }
  if(error) {
    content = <p>{ error }</p>
  }
  if(isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        { content }
      </section>
    </React.Fragment>
  );
}

export default App;
