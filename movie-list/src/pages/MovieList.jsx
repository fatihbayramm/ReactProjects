import "../css/MovieList.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_KEY = "919192f4f532834ba1941b0d5fc08a56";
const BASE_URL = "https://api.themoviedb.org/3";

function MovieList({ searchData }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const handleMovieClick = (movie) => {
    navigate("/movie/" + movie.id, { state: { movie } });
  };

  useEffect(() => {
    const getMovies = async () => {
      if (searchData && searchData.length > 0) {
        setData(searchData);
      } else {
        try {
          const response = await axios.get(`${BASE_URL}/movie/popular`, {
            params: {
              api_key: API_KEY,
              language: "en-US",
              page: 1,
            },
          });
          setData(response.data.results);
        } catch (error) {
          console.error(error);
        }
      }
    };

    getMovies();
  }, [searchData]);
  return (
    <div className="movie-list-container">
      {data &&
        data.map((movie) => (
          <div
            className="movie-box"
            key={movie.id}
            onClick={() => handleMovieClick(movie)}
          >
            <div className="movie-img-box">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>

            <div className="movie-info">
              <div>
                <h2>{movie.title}</h2>
              </div>

              <div>
                <p>Release Date: {movie.release_date}</p>
              </div>

              <div>
                <p>
                  Rating:{" "}
                  <span className="movie-rating">
                    {movie.vote_average.toFixed(1)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default MovieList;
