import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.api.recruitment.matic.io/',
});

export default api;

export const EndPoints = {
  articles: 'articles',
};
