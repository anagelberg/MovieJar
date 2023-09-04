import "./MovieCard.scss";
import { useState } from "react";

// import closeIcon from "../../assets/icons/close_dark.svg";
import MovieSummary from "../MovieSummary/MovieSummary";
import MovieModal from "../MovieModal/MovieModal";
import EditDelIcons from "../EditDelIcons/EditDelIcons";

//Attribution icons8
//<a href="https://www.freepik.com/search?format=search&freeSvg=free&last_filter=freeSvg&last_value=free&query=star&type=icon">Icon by UIcons</a> star

function MovieCard({ movie, delClick }) {
  const [showMovieModal, setShowMovieModal] = useState(false);

  const handleCardClick = () => {
    if (window.innerWidth <= 767) {
      setShowMovieModal(true);
    }
  }
  return (
    <>
      <div className="card" onClick={handleCardClick}>
        <div className="card">
          <div className="card__front">
            <div className="card__overlay"></div>
            <img className="card__poster-img" src={movie.posterUrl} alt="" />
          </div>
          {/* Back */}
          <div className="card__back">
            <div className="card__icon-container">
              <EditDelIcons delClick={delClick} />
            </div>

            <MovieSummary movie={movie} />
          </div>
        </div>
      </div>

      <MovieModal
        show={showMovieModal}
        movie={movie}
        delClick={delClick}
        closeHandler={() => setShowMovieModal(false)} />

    </>
  );
}

export default MovieCard;
