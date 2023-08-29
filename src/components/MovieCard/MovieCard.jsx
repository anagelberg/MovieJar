import "./MovieCard.scss";
import { useState } from "react";
import delIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/edit.svg";
import closeIcon from "../../assets/icons/close_dark.svg";
import starIcon from "../../assets/icons/star.svg";
//Attribution icons8
//<a href="https://www.freepik.com/search?format=search&freeSvg=free&last_filter=freeSvg&last_value=free&query=star&type=icon">Icon by UIcons</a> star

function MovieCard({ movie }) {
  return (
    <div className="card">
      <div className="card">
        <div className="card__front">
          <div className="card__overlay"></div>
          <img className="card__poster-img" src={movie.poster_url} alt="" />
        </div>
        {/* Back */}
        <div className="card__back">
          <div className="card__icon-head">
            <div>
              <img className="card__icon" src={editIcon} alt="pencil icon" />
              <img className="card__icon" src={delIcon} alt="trashcan icon" />
            </div>
            {/* <img className="card__icon" src={closeIcon} alt="X icon" /> */}
          </div>

          <div className="card__text">
            <h4>
              {movie.title} ({movie.year})
            </h4>

            <p className="card__rating">
              <img className="card__icon" src={starIcon} alt="" />
              {`${movie.rating} / 10`}
            </p>
            <div>
              <p className="card__vibe">
                {movie.emotional_vibe} emotionally, {movie.mental_vibe} mentally
              </p>
            </div>
            <p className="card__description">{movie.description}</p>
            <p className="card__runtime">{movie.run_time} minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
