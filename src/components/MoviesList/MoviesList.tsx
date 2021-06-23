import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import getPopular from '../../api/moviedb';
import './MoviesList.css';

function MoviesList(props: any) {
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    async function getAPI() {
      const response = await getPopular();
      setMovies(response.results);
    }
    getAPI();
  }, []);

  const movieList = movies.map((movie: any) => {
    return <MovieCard key={movie.id} movie={movie} />
  })
  console.log(movieList);

  return(
    <div className='movies-list'>
      {movieList}
    </div>
  );
}

export default MoviesList;