// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import MovieList from "../pages/MovieList";

// function GetMovie() {
//   const API_KEY = "919192f4f532834ba1941b0d5fc08a56";
//   const BASE_URL = "https://api.themoviedb.org/3";

//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/movie/popular`, {
//           params: {
//             api_key: API_KEY,
//             language: "en-US",
//             page: 1,
//           },
//         });
//         const result = response.data.results;
//         setData(result);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMovies();
//   }, []);

//   return <div>{loading ? <p>Loading...</p> : <MovieList data={data} />}</div>;
// }

// export default GetMovie;
