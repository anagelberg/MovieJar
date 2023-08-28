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
  rating: 74,
  year: 2023,
  run_time: 114,
  genres: ["comedy", "adventure", "fantasy"],
  imdb_id: "tt1517268",
  tmdb_id: 346698,
};

function DisplayJarPage() {
  const params = useParams();

  return (
    <>
      <div className="jar">
        <h1>Movie Jar</h1>
        {/* <p>Show movies from jar with id of {params.jarid}</p> */}
        {/* <p>Example Movie Card</p> */}
        <MovieCard movie={movie} />
      </div>
    </>
  );
}

export default DisplayJarPage;
