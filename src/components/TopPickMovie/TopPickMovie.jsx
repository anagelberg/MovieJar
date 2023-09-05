import './TopPickMovie.scss';
import Rating from '../Rating/Rating';

function TopPickMovie({ movie }) {
    return (
        <div className='top'>
            <div>
                <img className='top__img' src={movie?.posterUrl}></img>
            </div>
            <div className="top__info">
                <h2>{movie?.title}</h2>
                <Rating rating={movie?.publicRating} />
                <p>{movie?.mentalVibe} mentally, {movie?.emotionalVibe} emotionally</p>
                <p className='top__small'>{movie?.genres}</p>
                <p>{movie?.description}</p>
                <p className='top__small'>{movie?.runTime} minutes</p>
            </div>
        </div>
    );
}

export default TopPickMovie;