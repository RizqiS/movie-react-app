import React from "react";
import Button from "./Button";
import { useOutletContext } from "react-router-dom";

function CardMovie({ children }) {
  const [theme] = useOutletContext();
  return (
    <div
      className={`max-w-md flex justify-center shadow-md cursor-pointer flex-col items-center overflow-hidden rounded md:max-w-xs ${
        theme === "dark" ? "text-black bg-white" : "bg-black text-white"
      } `}
    >
      {children}
    </div>
  );
}

function CardTitle({ src }) {
  return (
    <img src={src} alt="movie images" className="w-full h-72 object-cover" />
  );
}

function CardBody({ movie }) {
  const { title, release_date, overview, popularity } = movie;
  return (
    <div className="w-full p-3 h-full">
      <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      <span className="text-xs tracking-wide font-semibold inline-block mb-3">
        {release_date}
      </span>
      <p className="text-xs font-thin mb-3">{overview}</p>
    </div>
  );
}

function CardFooter() {
  return (
    <div className="p-3 w-full">
      <Button>Watch Now</Button>
    </div>
  );
}

CardMovie.CardTitle = CardTitle;
CardMovie.CardBody = CardBody;
CardMovie.CardFooter = CardFooter;

export default CardMovie;
