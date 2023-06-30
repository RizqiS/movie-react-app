import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import React from "react";
import { useLoaderData } from "react-router-dom";

const CorouselPages = ({ movies }) => {
  const imagesApi = import.meta.env.VITE_IMG_IMDB;
  const second = 3000;
  return (
    <div className="bg-slate-800 mt-24 mb-24 w-full">
      <Carousel infiniteLoop autoPlay interval={second} dynamicHeight>
        {movies?.map((item, index) => {
          return (
            <div className="w-full h-96" key={index}>
              <img
                src={`${imagesApi}/${item.poster_path}`}
                className="object-contain w-full bg-center h-full "
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CorouselPages;
