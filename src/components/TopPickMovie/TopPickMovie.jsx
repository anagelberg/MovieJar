import './TopPickMovie.scss';
import Rating from '../Rating/Rating';

function TopPickMovie({ movie }) {
    return (
        <div className='top'>
            <div className="top__heading">
                <h4>Top Pick</h4>
            </div>


            <div className="top__body">
                <div className="top__info">
                    <h1>{movie?.title}</h1>
                    <Rating rating={movie?.publicRating} />
                    <p>{movie?.mentalVibe} mentally, {movie?.emotionalVibe} emotionally</p>
                    <p className='top__small'>{movie?.genres}</p>
                    <p>{movie?.description}</p>
                    <p className='top__small'>{movie?.runTime} minutes</p>
                </div>

                <div>
                    <img className='top__img' src={movie?.posterUrl}></img>
                </div>
            </div>

        </div>
    );
}

export default TopPickMovie;