import React from 'react';
import { Link } from 'react-router-dom';
import './Movie.css';

const Movie = ({ image, text, id }) => {
  return (
    <div className="movie">
      <Link to={`/movies/${id}`}>
        <div className="movie__img--wrapper">
          <img className="movie__img" src={image} alt={text} />
          <div className="movie__overlay">
            <h3 className="movie__info--title">{text}</h3>
            <button className="movie__button">Find Out More</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
