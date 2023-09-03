import "./MoviePickerPage.scss";
import SideForm from "../../components/SideForm/SideForm";
import MoviePickerForm from "../../components/MoviePickerForm/MoviePickerForm";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";

function MoviePickerPage({ jars, currentJar, loadJar }) {
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
              currentJar={currentJar} />
          )
        }}
      />
      <MoviesContainer
        currentJar={currentJar}
        loadJar={loadJar}
      />
    </div>
  );
}

export default MoviePickerPage;
