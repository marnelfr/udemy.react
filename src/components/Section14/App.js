import React, {useCallback, useEffect, useState} from 'react';

import MoviesList from './MoviesList/MoviesList';
import './App.css';
import AddMovie from "./AddMovie/AddMovie";

function MovieApp() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await fetch('https://udemy-react-a7270-default-rtdb.firebaseio.com/movies.json')
      if(!response.ok) {
        throw new Error("Couldn't get data")
      }

      const data = await response.json()

      const loadedMovies = []
      for (const movieID in data) {
        loadedMovies.push(
          {
            id: movieID,
            title: data[movieID].title,
            releaseDate: data[movieID].releaseDate,
            openingText: data[movieID].openingText
          }
        )
      }
      setMovies(loadedMovies)
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchMovieHandler()
  }, [fetchMovieHandler])

  const addMovieHandler = useCallback(async movie => {
    const response = await fetch('https://udemy-react-a7270-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    fetchMovieHandler()
  }, [fetchMovieHandler])

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
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        { content }
      </section>
    </React.Fragment>
  );
}

export default MovieApp;
