import './MovieSummary.scss';
import starIcon from "../../assets/icons/star.svg";

function MovieSummary({ movie }) {
    return (
        <div className="summary__text">
            <div>
                <h6 className="summary__title">
                    {movie.title}
                </h6 >
                <h6 className="summary__title">
                    ({movie.year})
                </h6>
            </div>

            <p className="summary__rating">
                <img className="summary__icon" src={starIcon} alt="" />
                {`${movie.publicRating} / 10`}
            </p>
            <p className="summary__description">{movie.description}</p>
            <p className="summary__runtime">{movie.runTime} minutes</p>
        </div>
    )
}

export default MovieSummary;