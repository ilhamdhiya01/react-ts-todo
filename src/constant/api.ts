import axios from 'axios';
import configJSON from './config.json';

const baseURL: string = `${configJSON.base_url}`;

const api = axios.create({
  baseURL,
});

export default api;
