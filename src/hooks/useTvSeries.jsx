import axios from "axios";
import { useEffect, useState } from "react";

export const useTvSeries = () => {
  const BaseUrl = import.meta.env.VITE_BASE_URL_IMDB;
  const apiKey = import.meta.env.VITE_API_KEY_IMDB;
  const [tvseries, setTvseries] = useState([]);

  useEffect(() => {
    const getApiTvSeries = async () => {
      try {
        const { data } = await axios.get(`${BaseUrl}/tv/popular?`, {
          params: {
            api_key: apiKey,
          },
        });
        setTvseries(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getApiTvSeries();
  }, []);

  return tvseries;
};
