import axios from 'axios';

const version = 'v1.0.0';

export default axios.create({
  baseURL: `https://geodata.gov.hk/gs/api/${version}/locationSearch`,
});
