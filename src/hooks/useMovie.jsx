import { useEffect, useState } from "react";
import axios from "axios";

export function useMovieTrending() {
  const [movies, setMovies] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL_IMDB;
  const apiKey = import.meta.env.VITE_API_KEY_IMDB;

  useEffect(() => {
    const getApiTrending = async () => {
      const responses = await axios.get(`${baseUrl}/trending/all/week?`, {
        params: { api_key: apiKey },
      });
      const data = responses.data.results;
      setMovies(data);
    };
    getApiTrending();
  }, []);

  return movies;
}

export function useDetailMovie(id) {
  const [movieDetail, setMovieDetail] = useState([]);
  useEffect(() => {
    const getApiDetailMovies = async (myid) => {
      try {
        const { data } = await axios.get(`${baseUrl}/movie/${myid}?`, {
          params: { api_key: apiKey },
        });
        setMovieDetail(data);
      } catch (error) {
        console.log(error);
      }
    };
    getApiDetailMovies(id);
  }, [id]);

  return movieDetail;
}
