import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedFilmSelector } from '../../store/selectors';
import { Link } from 'react-router-dom';
import { selectFilm } from '../../store/actions/filmActions';
import getPopular from '../../api/moviedb';
import store from '../../store/index'
import './MoviesList.css';

function MoviesList(props: any) {
  const dispatch = useDispatch();
  const selectedFilm = useSelector(selectedFilmSelector);
  const [ movies, setMovies ] = useState([]);
  useEffect(() => {
    async function getAPI() {
      const response = await getPopular();
      setMovies(response.results);
    }
    getAPI();
  }, []);

  const linkHandler = (movie: any) => {
    console.log(store.getState());
    selectedFilm.id = movie.id;
    selectedFilm.title = movie.title;
    selectedFilm.description = movie.overview;
    selectedFilm.rating = movie.vote_average;
    selectedFilm.releaseDate = movie.release_date;
    dispatch(selectFilm(selectedFilm));
    console.log(store.getState());
  }

  const movieList = movies.map((movie: any) => {
    return (
    <Link onClick={() => linkHandler(movie)} key={movie.id} to='/film' className="movie-card">
        <div className='title'>
          <h1>{movie.title}</h1>
        </div>
        <div className='movie-poster'>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='posterImage'/>
        </div>
        <div className='movie-actions'>
            <p className='movie-rating'>{movie.vote_average}</p>
        </div>
    </Link>
    )
  })
  console.log(movieList);

  return(
    <div className='movies-list'>
      {movieList}
    </div>
  );
}

export default MoviesList;