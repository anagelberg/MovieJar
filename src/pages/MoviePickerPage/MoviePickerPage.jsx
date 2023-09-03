import "./MoviePickerPage.scss";
import SideForm from "../../components/SideForm/SideForm";
import MoviePickerForm from "../../components/MoviePickerForm/MoviePickerForm";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import { useState, useEffect } from "react";
import Button from "../../components/Button/Button";

function MoviePickerPage({ jars, currentJar, loadJar, showSubForm, setShowSubForm }) {

  const [filters, setFilters] = useState({
    mentalVibe: { 'Neutral': true, 'Brainless': true, 'Thought-provoking': true },
    emotionalVibe: { 'Neutral': true, 'Light-hearted': true, 'Heavy-hearted': true },
    maxRunTime: 180
  })

  useEffect(() => {
    setShowSubForm(true);
  }, []);

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
      <div className="picker-page__movies">
        <MoviesContainer
          currentJar={currentJar}
          loadJar={loadJar}
          filters={filters}
        />
      </div>
    </div>
  );
}

export default MoviePickerPage;
