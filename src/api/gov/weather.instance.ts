import axios from 'axios';

export default axios.create({
  baseURL: 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php',
});
