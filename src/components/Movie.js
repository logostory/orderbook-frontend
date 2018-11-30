import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({
  description, picture, id, name,
}) {
  return (
    <div className="Movie" id={id}>
      <div className="Movie__Column">
        <MoviePoster picture={picture} alt={name} />
      </div>
      <div className="Movie__Column">
        <h1>{description}</h1>
      </div>
    </div>
  );
}

function MoviePoster({ picture, alt }) {
  return (
    <img src={picture} alt={alt} title={alt} className="Movie__Poster" />
  );
}


Movie.propTypes = {
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

MoviePoster.propTypes = {
  picture: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Movie;
