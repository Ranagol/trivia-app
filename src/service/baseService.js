import axios from 'axios';

const HTTP = axios.create({
  baseURL: "https://opentdb.com/"
});

export default HTTP;