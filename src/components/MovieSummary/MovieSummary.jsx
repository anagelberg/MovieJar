import './MovieSummary.scss';
import Rating from '../Rating/Rating';

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
            <Rating rating={movie.publicRating} />
            <p className="summary__description">{movie.description}</p>
            <p className="summary__runtime">{movie.runTime} minutes</p>
        </div>
    )
}

export default MovieSummary;