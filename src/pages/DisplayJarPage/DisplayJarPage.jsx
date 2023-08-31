import "./DisplayJarPage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import axios from "axios";

//TODO: format description so doesn't go too far off the card

function DisplayJarPage() {
  const params = useParams();
  const [jarInfo, setJarInfo] = useState({})

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/jar/${params.jarid}`).then((response) => {
      console.log('Test API connection', response.data)
      setJarInfo(response.data);
    }).catch(err => {
      console.log(err)
    })
  }, [params]);

  return (
    <>
      <div className="jar">
        <div className="jar__top-space">
          <h1 className="jar__title">{jarInfo?.name}</h1>
        </div>

        <div className="jar__container">
          {jarInfo?.movies?.map((movie) => {
            return <MovieCard movie={movie} />
          })}

        </div>
      </div>
    </>
  );
}

export default DisplayJarPage;
