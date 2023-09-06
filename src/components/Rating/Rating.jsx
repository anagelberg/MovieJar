import './Rating.scss';
import starIcon from "../../assets/icons/star.svg";

function Rating({ rating }) {
    return (
        <p className="rating">
            <img className="rating__icon"
                src={starIcon} alt="star" />
            {`${rating} / 5`}
        </p>)
}

export default Rating;