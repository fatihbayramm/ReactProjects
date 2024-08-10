import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";

// import GetMovie from "../components/GetMovie";
import MovieList from "../pages/MovieList";

function RouterConfig({ data }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MovieList searchData={data} />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default RouterConfig;
