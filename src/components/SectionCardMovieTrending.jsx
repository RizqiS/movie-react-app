import { Suspense, useEffect, useState } from "react";
import CardMovie from "../components/CardMovie";
import { Link, useLoaderData } from "react-router-dom";
import CorouselPages from "../pages/CorouselPages";
function SectionCardMovieTrending() {
  const responses = useLoaderData();
  const imagesApi = import.meta.env.VITE_IMG_IMDB;
  const movies = responses.data.results;

  return (
    <>
      <CorouselPages movies={movies} />
      <div className="mt-10 mb-32 w-full h-[584px] overflow-hidden overflow-y-auto flex">
        <div className="flex flex-wrap gap-y-3 md:gap-x-3 justify-center ">
          {movies?.map((m) => {
            return (
              <Suspense key={m.id} fallback={<p>LOADING PAGES ....</p>}>
                <Link to={`trending/${m.id}`}>
                  <CardMovie>
                    <CardMovie.CardTitle
                      src={`${imagesApi}/${m.poster_path}`}
                    />
                    <CardMovie.CardBody movie={m} />
                    <CardMovie.CardFooter />
                  </CardMovie>
                </Link>
              </Suspense>
            );
          })}
        </div>
        {/* <div className="w-3/5 border rounded shadow-lg">

      </div> */}
      </div>
    </>
  );
}

export default SectionCardMovieTrending;
