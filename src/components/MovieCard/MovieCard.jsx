import "./MovieCard.scss";
import { useState } from "react";

function MovieCard({ movie }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="card"
      onMouseOver={() => setIsFlipped(true)}
      onMouseOut={() => setIsFlipped(false)}
    >
      <div className={`card ${isFlipped ? "card--flipped" : ""}`}>
        <div className="card__front">
          <div className="card__overlay"></div>
          <img className="card__poster-img" src={movie.poster_url} alt="" />
        </div>
        <div className="card__back">
          <h4>{movie.title}</h4>
          <p className="card__description">{movie.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
