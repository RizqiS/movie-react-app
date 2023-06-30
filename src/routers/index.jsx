import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";

import TrendingPages from "../pages/TrendingPages";
import TvSeriesPages from "../pages/TvSeriesPages";
import ErrorPages from "../pages/ErrorPages";

import DetailMovie from "../components/DetailMovie";
import {
  loadersMovieTrending,
  loadersTvSeries,
  loaderMovieTrendingById,
} from "../utils/loaders";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPages />,
    children: [
      {
        path: "/",
        element: <TrendingPages />,
        loader: loadersMovieTrending,
      },
      {
        path: "/tvseries",
        element: <TvSeriesPages />,
        loader: loadersTvSeries,
      },
    ],
  },
  {
    path: "/trending/:myid",
    element: <DetailMovie />,
    loader: loaderMovieTrendingById,
  },
]);
