import "./MoviesContainer.scss";
import MovieCard from "../../components/MovieCard/MovieCard";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import { useEffect, useState } from "react";
import axios from "axios";

function MoviesContainer({ movies, loadJar, currentJar }) {

    const [showDelModal, setShowDelModal] = useState(false);
    const [delMovie, setDelMovie] = useState(null);


    const handleDeleteMovie = (movieId, jarId) => {
        axios.delete(`${process.env.REACT_APP_BASE_URL}/jar/${jarId}/movie/${movieId}`).then(() => {
            loadJar(jarId);
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <div className="movie-container">
                {movies?.map(movie => {
                    return (
                        <MovieCard
                            key={movie?.id}
                            movie={movie}
                            delClick={() => {
                                setShowDelModal(true);
                                setDelMovie(movie);
                            }} />
                    )
                })}
            </div>

            <DeleteModal
                show={showDelModal}
                headText={`Remove ${delMovie?.title} from ${currentJar?.name}?`}
                bodyText={`You won't be able to undo this action`}
                closeHandler={() => {
                    setShowDelModal(false);
                }}
                delAction={() => {
                    handleDeleteMovie(delMovie.id, currentJar?.id);
                    setShowDelModal(false);
                }}
            />

        </>
    );
}

export default MoviesContainer;
