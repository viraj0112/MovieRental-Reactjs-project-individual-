//29c9cbbe=key
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Header from "./Components/Header";
import Header2 from "./Components/Header2";
import { Footer } from "./Components/Footer";

import About from "./Components/Header/About";

const API_URL = "http://www.omdbapi.com?apikey=29c9cbbe";

const Search = () => {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState(" ");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Harry Potter");
  }, []);
  return (
    <>
      {movies?.length > 0 ? (
        <div className="container">
          <center>
            <input
              placeholder="Search for movies."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="30"
            />
            <button onClick={() => searchMovies(searchTerm)}>Search</button>
          </center>

          <div className="row">
            <div className="mov">
              <center>
                {movies.map((movie) => (
                  <MovieCard movie={movie} />
                ))}
              </center>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty">
          <p>nothing found</p>
        </div>
      )}
    </>
  );
};

export default function App() {
  return (
    <>
      <Header />
      <Header2 />
      {/* <Link to="/about">About</Link> */}
      <div className="body">
        <Search />
      </div>
      <Footer />
    </>
  );
}
