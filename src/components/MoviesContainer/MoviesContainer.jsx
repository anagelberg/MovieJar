import "./MoviesContainer.scss";
import MovieCard from "../../components/MovieCard/MovieCard";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import { useState } from "react";
import axios from "axios";

function MoviesContainer({ currentJar, loadJar, filters }) {

    const [showDelModal, setShowDelModal] = useState(false);
    const [delMovie, setDelMovie] = useState(null);


    const handleDeleteMovie = (movieId, jarId) => {
        axios.delete(`${process.env.REACT_APP_BASE_URL}/jar/${jarId}/movie/${movieId}`).then(() => {
            loadJar(jarId);
        }).catch(err => {
            console.log(err)
        })
    }

    const passesFilters = (movie) => {
        if (filters) {
            const desiredMentalVibes = Object.keys(filters?.mentalVibe).filter(key => filters?.mentalVibe[key]);
            const desiredEmotionalVibes = Object.keys(filters?.emotionalVibe).filter(key => filters?.emotionalVibe[key]);

            // console.log(filters);
            return (
                desiredMentalVibes?.includes(movie?.mentalVibe)
                && desiredEmotionalVibes?.includes(movie?.emotionalVibe)
                && movie?.runTime <= filters?.maxRunTime
            )
        } else return true;

    }


    return (
        <>
            <div className="jar__container">
                {currentJar?.movies?.filter(movie => passesFilters(movie))
                    .map((movie) => {
                        return <MovieCard movie={movie} delClick={() => {
                            setShowDelModal(true);
                            setDelMovie(movie);
                        }} />
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
