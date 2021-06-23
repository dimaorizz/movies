import React from 'react';
import './MovieCard.css'

function MovieCard(props: any) {
  const movie = props.movie;
  return (
    <div className='movie-card'>
      <div className='title'>
        <h1>{movie.title}</h1>
      </div>
      <div className='movie-poster'>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='posterImage'/>
      </div>
      <div className='movie-actions'>
          <p className='movie-rating'>{movie.vote_average}</p>
      </div>
    </div>
  );
}

export default MovieCard;