import "./MovieCardPreview.scss";

function MovieCardPreview({ movie, setSelectedMovie, selected }) {
  return (
    <div className={selected ? "cardPrev cardPrev--selected" : "cardPrev"} onClick={() => { setSelectedMovie(movie) }}>
      <div className="card__overlay"></div>
      <img className="cardPrev__poster-img" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />

    </div>
  );
}

export default MovieCardPreview;
