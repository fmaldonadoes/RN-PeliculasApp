import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'df3aab5aa6160820c53e03cdfc21e682',
    language: 'es-ES',
  },
});

export default movieDB;
