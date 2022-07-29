import React from "react";
import "./App.css";
const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="movie">
        <div>
          <p>{movie.Year}</p>
        </div>
        <div>
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
            width="200"
            height={250}
          />
        </div>
        <div>
          <span>
            {movie.Type}
            <h3>{movie.Title}</h3>
            <button>Watch Now</button>
            <button>Rent</button>
          </span>
        </div>
      </div>
      {/* <hr class="dropdown-divider" /> */}
    </>
  );
};

export default MovieCard;
