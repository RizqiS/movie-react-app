import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const DetailMovie = () => {
  const responses = useLoaderData();
  const imagesApi = import.meta.env.VITE_IMG_IMDB;
  const movies = responses.data;

  console.log(movies);

  return (
    <div className="container mx-auto">
      <h1 className="mt-32 mb-5">
        Trending {">"} {movies.title}
        <Link to="/">
          <small className="block">{"<"} Back</small>
        </Link>
      </h1>
      <div className="flex justify-start gap-x-3">
        <div className="w-3/5 h-auto bg-slate-700">
          <img
            src={`${imagesApi}/${movies.backdrop_path}`}
            alt={movies.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-2/5 h-auto flex flex-col pt-2 pl-2 pb-2 bg-slate-700">
          <h1 className="text-white text-2xl">{movies.original_title}</h1>
          <div>
            <small className="text-white">
              Release Date: {movies.release_date}
            </small>
            <br />
            <small className="text-white">Tagline: {movies.tagline}</small>
          </div>
          <div>
            <small className="text-white">Overview :</small>
          </div>
          <div>
            <small className="text-white">{movies.overview}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
