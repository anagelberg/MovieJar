import "./MoviePickerPage.scss";
import SideForm from "../../components/SideForm/SideForm";
import MoviePickerForm from "../../components/MoviePickerForm/MoviePickerForm";

function MoviePickerPage({ jars }) {
  return (
    <div>
      <SideForm
        onClose={() => {
          console.log("close this...")
        }}
        form={() => {
          return (
            <MoviePickerForm jars={jars} />
          )
        }}
      />
    </div>
  );
}

export default MoviePickerPage;
