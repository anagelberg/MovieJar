import "./DisplayJarPage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import axios from "axios";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

//TODO: format description so doesn't go too far off the card

function DisplayJarPage() {
  const params = useParams();
  const [jarInfo, setJarInfo] = useState({})
  const [showDelModal, setShowDelModal] = useState(false);
  const [delMovie, setDelMovie] = useState(null);

  const getJars = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/jar/${params.jarid}`).then((response) => {
      setJarInfo(response.data);
    }).catch(err => {
      console.log(err)
    })
  }

  const handleDeleteMovie = () => {
    console.log(`This will delete the movie with id ${delMovie.id} from the jar with id ${jarInfo.id}`);
    axios.delete(`${process.env.REACT_APP_BASE_URL}/jar/${jarInfo.id}/movie/${delMovie.id}`).then(() => {
      console.log("Deleted")
      getJars();
    }).catch(err => {
      console.log(err)
    })
  }


  useEffect(() => {
    getJars();
  }, [params]);

  return (
    <>
      <div className="jar">
        <div className="jar__top-space">
          <h1 className="jar__title">{jarInfo?.name}</h1>
        </div>

        <div className="jar__container">
          {jarInfo?.movies?.map((movie) => {
            return <MovieCard movie={movie} delClick={() => {
              setShowDelModal(true);
              setDelMovie(movie);
            }} />
          })}

        </div>
      </div>

      <DeleteModal
        show={showDelModal}
        headText={`Remove ${delMovie?.title} from ${jarInfo?.name}?`}
        bodyText={`You won't be able to undo this action`}
        closeHandler={() => {
          setShowDelModal(false);
        }}
        delAction={() => {
          handleDeleteMovie();
          setShowDelModal(false);
        }}
      />


    </>
  );
}

export default DisplayJarPage;
