import React, { useState } from "react";
import GetWeatherData from "./GetWeatherData";
import "../css/SearchCity.css";

function SearchCity() {
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");

  const sendData = () => {
    setSearchCity(city);
  };
  return (
    <div className="weather-app-container">
      <div className="search-city">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter a city"
        />
        <button onClick={sendData}>Search City</button>
      </div>
      <GetWeatherData city={searchCity} />
    </div>
  );
}

export default SearchCity;
