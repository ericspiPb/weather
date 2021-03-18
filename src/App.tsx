import React from 'react';
import logo from './logo.svg';
import './App.css';

import requestCurrentWeatherReport from './api/gov/weather/CurrentWeatherReport.request';

import WeatherIcon from './api/gov/weather/icon.component';

function App() {
  requestCurrentWeatherReport.then((res) => console.log(res.data));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Log React
          {WeatherIcon(50)}
        </a>
      </header>
    </div>
  );
}

export default App;
