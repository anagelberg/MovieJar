import "./MoviePickerPage.scss";
import SideForm from "../../components/SideForm/SideForm";
import MoviePickerForm from "../../components/MoviePickerForm/MoviePickerForm";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import TopPickMovie from "../../components/TopPickMovie/TopPickMovie";
import { useState, useEffect } from "react";


function MoviePickerPage({ jars, currentJar, loadJar, showSubForm, setShowSubForm }) {

  const [filteredMovies, setFilteredMovies] = useState(currentJar?.movies);
  const [topPick, setTopPick] = useState();
  useEffect(() => {
    setShowSubForm(true);
  }, []);

  const [filters, setFilters] = useState({
    mentalVibe: { 'Neutral': true, 'Brainless': true, 'Thought-provoking': true },
    emotionalVibe: { 'Neutral': true, 'Light-hearted': true, 'Heavy-hearted': true },
    maxRunTime: 180
  })

  const passesFilters = (movie) => {
    if (filters) {
      const desiredMentalVibes = Object.keys(filters?.mentalVibe)?.filter(key => filters?.mentalVibe[key]);
      const desiredEmotionalVibes = Object.keys(filters?.emotionalVibe)?.filter(key => filters?.emotionalVibe[key]);

      return (
        desiredMentalVibes?.includes(movie?.mentalVibe)
        && desiredEmotionalVibes?.includes(movie?.emotionalVibe)
        && (movie?.runTime <= filters?.maxRunTime || filters?.maxRunTime >= 200)
      )
    } else return true;
  }

  useEffect(() => {
    const newFilteredMovies = currentJar?.movies
      ?.filter(movie => passesFilters(movie))
      ?.sort((a, b) => b.publicRating - a.publicRating);

    const newTopPick = newFilteredMovies?.shift();

    setTopPick(newTopPick);
    setFilteredMovies(newFilteredMovies);
  }, [filters, currentJar])


  return (
    <div className="picker-page">
      <div className={showSubForm ? "picker-page__form-container" : "picker-page__form-container picker-page__form-container--hidden"}>
        <SideForm
          onClose={() => {
            setShowSubForm(false);
          }}
          form={() => {
            return (
              <MoviePickerForm
                jars={jars}
                loadJar={loadJar}
                currentJar={currentJar}
                filters={filters}
                setFilters={setFilters}
                setShowSubForm={setShowSubForm} />
            )
          }}
        />
      </div>
      <section className="picker-page__page">
        {topPick ?
          <>
            <TopPickMovie movie={topPick} />
            {filteredMovies.length > 0 &&
              <>
                <h1>Other Options: </h1>
                <div className="picker-page__movies">
                  <MoviesContainer
                    movies={filteredMovies}
                    currentJar={currentJar}
                    loadJar={loadJar}
                  />
                </div>
              </>
            }
          </>
          : <div className="picker-page__no-movies">
            <h1>None of your movies meet your search criteria 😢</h1>
          </div>
        }


      </section>
    </div>
  );
}

export default MoviePickerPage;
