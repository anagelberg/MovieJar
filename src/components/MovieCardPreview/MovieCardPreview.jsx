import "./MovieCardPreview.scss";

function MovieCardPreview({ movie, setSelectedMovie, selected }) {
  return (
    <div className={selected ? "card card--selected" : "card"} onClick={() => { setSelectedMovie(movie) }}>
      <div className="card__overlay"></div>
      <img className="card__poster-img" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />

    </div>
  );
}

export default MovieCardPreview;
