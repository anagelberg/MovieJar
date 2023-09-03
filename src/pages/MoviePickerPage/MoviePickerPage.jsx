import "./MoviePickerPage.scss";
import SideForm from "../../components/SideForm/SideForm";
import MoviePickerForm from "../../components/MoviePickerForm/MoviePickerForm";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import { useEffect, useState } from "react";

function MoviePickerPage({ jars, currentJar, loadJar }) {

  const [filters, setFilters] = useState({
    mentalVibe: { 'Neutral': true, 'Brainless': true, 'Thought-provoking': true },
    emotionalVibe: { 'Neutral': true, 'Light-hearted': true, 'Heavy-hearted': true }
  })

  useEffect(() => {
    console.log(filters)
  }, [filters])

  return (
    <div>
      <SideForm
        onClose={() => {
          console.log("close this...")
        }}
        form={() => {
          return (
            <MoviePickerForm
              jars={jars}
              loadJar={loadJar}
              currentJar={currentJar}
              filters={filters}
              setFilters={setFilters} />
          )
        }}
      />
      <MoviesContainer
        currentJar={currentJar}
        loadJar={loadJar}
        filters={filters}
      />
    </div>
  );
}

export default MoviePickerPage;
