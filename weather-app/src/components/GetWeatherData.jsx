import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "../css/GetWeatherData.css";

const API_KEY = "9df1436bd9e93017c299a4ad80cef4ab";

function GetWeatherData({ city }) {
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const [weatherData, setWeatherData] = useState(null);

  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  useEffect(() => {
    if (city) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${BASE_URL}`);
          setWeatherData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [city]);

  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  };

  return (
    <div className="weather-data-container">
      {weatherData ? (
        <div>
          <div className="city-name-box">
            <p className="city-name">{weatherData.name}</p>
          </div>
          <div className="date-box">
            <p className="date">
              {day}/{month}/{year} - {hours}.{minutes}
            </p>
          </div>
          <div className="temperature-box">
            <p className="temperature">
              {(weatherData.main.temp - 273.15).toFixed(1)} °C
            </p>
          </div>
          <div className="humidity-and-wind-box">
            <div>
              {" "}
              <p className="humidity">Humidity: %{weatherData.main.humidity}</p>
            </div>
            <div>
              <p className="wind">Wind Speed: {weatherData.wind.speed} m/s</p>
            </div>
          </div>
          <div className="description-box">
            <p className="description">
              {capitalizeWords(weatherData.weather[0].description)}
            </p>
          </div>
        </div>
      ) : (
        <p className="empty-info">Enter a city and make search.</p>
      )}
    </div>
  );
}

export default GetWeatherData;
