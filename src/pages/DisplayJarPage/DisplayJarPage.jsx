import "./DisplayJarPage.scss";
import { useParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";

const movie = {
  id: 1,
  title: "Barbie",
  poster_url:
    "https://www.themoviedb.org/t/p/w440_and_h660_face/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
  description:
    "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
  rating: 7.4,
  year: 2023,
  run_time: 114,
  genres: ["comedy", "adventure", "fantasy"],
  imdb_id: "tt1517268",
  tmdb_id: 346698,
  mental_vibe: "neutral",
  emotional_vibe: "neutral",
};

function DisplayJarPage() {
  const params = useParams();

  return (
    <>
      <div className="jar">
        <div className="jar__top-space">
          <h1 className="jar__title">Movie Jar</h1>
        </div>

        {/* <p>Show movies from jar with id of {params.jarid}</p> */}
        {/* <p>Example Movie Card</p> */}
        <div className="jar__container">
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
        </div>
      </div>
    </>
  );
}

export default DisplayJarPage;
