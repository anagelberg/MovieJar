import "./DisplayJarPage.scss";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import plusIcon from "../../assets/icons/plus.svg";

function DisplayJarPage({ currentJar, loadJar, setIsSideBarOpen }) {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.jarid) {
      loadJar(params.jarid);
    } else if (currentJar.id) {
      navigate(`/jar/${currentJar.id}`)
    } else {
      setIsSideBarOpen(true)
    }
  }, [params.jarid]);

  useEffect(() => {
    console.log('current Jar', currentJar);
  }, [currentJar])

  return (
    <div className="jar">
      <h1 className="jar__title">{currentJar?.name}</h1>

      <MoviesContainer
        movies={currentJar?.movies}
        currentJar={currentJar}
        loadJar={loadJar}
      />

      <Link to="/search">
        <div className="jar__add-btn">
          <img src={plusIcon} alt="+ add movie button" className="jar__plus-icon" />
        </div>
      </Link>
    </div>
  );
}

export default DisplayJarPage;
