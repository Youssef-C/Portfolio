import './WeatherApp.css';
import React, { useState } from 'react';

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
}

function WeatherApp() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch (`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then (result => {
        setWeather(result);
        setQuery('');
      });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    
    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="weather-app">
      <main>
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp < 10) ? "flex-container cold" : "flex-container") : "flex-container"}>
        <h2 className="info-weather">Check the weather!</h2>
          {/*SEARCH BOX*/}
          <div className="search-box">
            <input type="text"
            className="search-bar"
            placeholder="City..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
          </div>

          {/*LOCATION BOX*/}
          {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
          
          {/*WEATHER BOX, renders weather conditions*/}
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}
        </div>
      </main>
    </div>
  );
}

export default WeatherApp;