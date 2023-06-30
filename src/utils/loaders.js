import axios from "axios";

export const loadersMovieTrending = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL_IMDB;
  const apiKey = import.meta.env.VITE_API_KEY_IMDB;

  return axios.get(`${baseUrl}/trending/all/week?`, {
    params: { api_key: apiKey },
  });
};

export const loadersTvSeries = () => {
  const BaseUrl = import.meta.env.VITE_BASE_URL_IMDB;
  const apiKey = import.meta.env.VITE_API_KEY_IMDB;

  return axios.get(`${BaseUrl}/tv/popular?`, {
    params: {
      api_key: apiKey,
    },
  });
};

export const loaderMovieTrendingById = ({ params }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL_IMDB;
  const apiKey = import.meta.env.VITE_API_KEY_IMDB;

  return axios.get(`${baseUrl}/movie/${params.myid}?`, {
    params: { api_key: apiKey },
  });
};
