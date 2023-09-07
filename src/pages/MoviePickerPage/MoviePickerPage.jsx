import "./MoviePickerPage.scss";
import SideForm from "../../components/SideForm/SideForm";
import MoviePickerForm from "../../components/MoviePickerForm/MoviePickerForm";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import TopPickMovie from "../../components/TopPickMovie/TopPickMovie";
import { useState, useEffect } from "react";
import UserFeedback from "../../components/UserFeedback/UserFeedback";


function MoviePickerPage({ jars, currentJar, loadJar, showSubForm, setShowSubForm }) {

  const [filteredMovies, setFilteredMovies] = useState(currentJar?.movies);
  const [topPick, setTopPick] = useState();

  useEffect(() => {
    setShowSubForm(true);
  }, []);

  // useEffect(() => {
  //   // default to first jar 
  //   setDefaultJar();
  // }, [currentJar, jars])

  const [filters, setFilters] = useState({
    mentalVibe: { 'Brainless': true, 'Neutral': true, 'Thought-provoking': true },
    emotionalVibe: { 'Light-hearted': true, 'Neutral': true, 'Heavy-hearted': true },
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



  if (!jars || jars.length === 0) return (
    <UserFeedback message="You don't have any jars yet. Come back once you've created some jars and added movies and this page will help you select one to watch." />
  )


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
            <h3>Top Pick</h3>
            <TopPickMovie movie={topPick} />
            {filteredMovies.length > 0 &&
              <>
                <h3>Other Options: </h3>
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
          : <UserFeedback message="None of your movies meet your search criteria" />
        }


      </section>
    </div>
  );
}

export default MoviePickerPage;
