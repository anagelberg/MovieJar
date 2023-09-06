import './MovieSummary.scss';
import Rating from '../Rating/Rating';

function MovieSummary({ movie }) {
    return (
        <div className="summary__text">
            <div>
                <div className='summary__title-container'>
                    <h4 className="summary__title">
                        {movie.title}
                    </h4 >
                    <h4 className="summary__title">
                        ({movie.year})
                    </h4>
                </div>
                <Rating rating={movie.publicRating} />
            </div>
            <p className="summary__description">{movie.description}</p>
            <p className="summary__runtime">{movie.runTime} minutes</p>
        </div>
    )
}

export default MovieSummary;