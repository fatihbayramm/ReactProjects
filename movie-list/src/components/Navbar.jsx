import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

const API_KEY = "919192f4f532834ba1941b0d5fc08a56";
const BASE_URL = "https://api.themoviedb.org/3";
function Navbar({ onSearchResults }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    const getQueryResult = async () => {
      if (query.trim() === "") {
        onSearchResults([]);
      }

      try {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
          params: {
            api_key: API_KEY,
            query: query,
            language: "en-US",
            page: 1,
          },
        });

        onSearchResults(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      getQueryResult();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <div className="navbar">
      <div className="logo">
        <a href="/" className="logo-router">
          Movie List
        </a>
      </div>
      <div className="search-box">
        <BsSearch className="search-icon" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="search-input"
          placeholder="Search movies..."
        />
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;
