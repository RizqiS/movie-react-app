import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="container mx-auto p-4 dark:bg-slate-800">
      <div className="flex items-center justify-between">
        <div>
          <div
            className={`mt-14 hover:opacity-80 cursor-pointer ${
              theme === "dark" ? "text-black bg-white" : "bg-black text-white"
            } inline-block px-3 py-2 rounded `}
          >
            <Link to="/">Trending Movies</Link>
          </div>
          <div
            className={`mt-14 hover:opacity-80 cursor-pointer ${
              theme === "dark" ? "text-black bg-white" : "bg-black text-white"
            } inline-block px-3 py-2 ml-5 rounded `}
          >
            <Link to="/tvseries">Trending Tv Series</Link>
          </div>
        </div>
        <div className="mt-10">
          <button
            className={`border px-3 py-2 ${
              theme === "dark" ? "text-black bg-white" : "bg-black text-white"
            } rounded transition-all duration-300`}
            onClick={handleTheme}
          >
            {theme === "dark" ? "light" : "dark"}
          </button>
        </div>
      </div>
      <Outlet context={[theme]} />

      <footer className="mt-24 flex justify-between items-center">
        <h1>@rizqi.py</h1>
        <h1>
          <Link to="https://www.instagram.com/rizqi.py/" target="_blank">
            Instragram Link
          </Link>
        </h1>
      </footer>
    </div>
  );
};

export default RootLayout;
