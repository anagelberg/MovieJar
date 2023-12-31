import Button from "../Button/Button";
import "./MovieModal.scss";
// import closeHeaderIcon from "../../assets/icons/close.svg";
// import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'
import Modal from "../Modal/Modal";
import MovieSummary from "../MovieSummary/MovieSummary";
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'
import EditDelIcons from "../EditDelIcons/EditDelIcons";

function MovieModal({ show, movie, delClick, closeHandler }) {

    return (
        <Modal
            show={show}
            headerContent={() => {
                return (
                    <>
                        <div className='movie-modal__edit-del'>
                            <EditDelIcons delClick={delClick} />
                        </div>
                        <CloseIcon className="movie-modal__close" onClick={closeHandler} />
                    </>
                )
            }}
            bodyContent={() => <MovieSummary movie={movie} />}
        />
    );
}

export default MovieModal;