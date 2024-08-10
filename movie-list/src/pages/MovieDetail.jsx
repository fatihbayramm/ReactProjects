import React from "react";
import { useLocation } from "react-router-dom";
import "../css/MovieDetail.css";

function MovieDetail() {
  const location = useLocation();
  const movie = location.state?.movie;
  return (
    <div className="movie-detail-container">
      <div className="movie-image">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title}`}
        />
      </div>
      <div className="movie-detail-info">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-overview">{movie.overview}</div>
        <div className="movie-release-date">
          Release Date: {movie.release_date}
        </div>
        <div className="movie-imdb">IMDB: {movie.vote_average.toFixed(1)}</div>
      </div>
    </div>
  );
}

export default MovieDetail;
