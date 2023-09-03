import "./DisplayJarPage.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";

//TODO: format description so doesn't go too far off the card

function DisplayJarPage({ currentJar, loadJar }) {
  const params = useParams();


  useEffect(() => {
    loadJar(params.jarid);
  }, [params, loadJar]);

  return (
    <div className="jar">
      <div className="jar__top-space">
        <h1 className="jar__title">{currentJar?.name}</h1>
      </div>

      <MoviesContainer
        currentJar={currentJar}
        loadJar={loadJar}
        filters={null}
      />
    </div>
  );
}

export default DisplayJarPage;
