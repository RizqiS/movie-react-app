import React, { Suspense } from "react";
import CardMovie from "./CardMovie";
import { useLoaderData } from "react-router-dom";
import CorouselPages from "../pages/CorouselPages";

const SectionCardTvSeries = () => {
  const responeses = useLoaderData();
  const imagesApi = import.meta.env.VITE_IMG_IMDB;
  const tvseries = responeses.data.results;
  return (
    <div>
      <CorouselPages movies={tvseries} />
      <div className="mt-10 mb-32 w-full flex">
        <div className="w-full flex flex-wrap justify-center gap-3 p-3 ">
          {tvseries?.map((m) => {
            return (
              <Suspense key={m.id} fallback={<p>LOADING PAGES ....</p>}>
                <CardMovie>
                  <CardMovie.CardTitle src={`${imagesApi}/${m.poster_path}`} />
                  <CardMovie.CardBody movie={m} />
                  <CardMovie.CardFooter />
                </CardMovie>
              </Suspense>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionCardTvSeries;
