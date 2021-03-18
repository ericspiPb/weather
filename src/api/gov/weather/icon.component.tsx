import React from 'react';

export default function WeatherIcon(no: number): JSX.Element {
  return <img src={`/WeatherIcons/pic${no}.png`} alt={`pic${no}`} />; // under public folder
}
