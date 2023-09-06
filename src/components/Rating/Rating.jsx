import './Rating.scss';
import starIcon from "../../assets/icons/star.svg";

function Rating({ rating }) {
    return (
        <p className="rating">
            {`${rating} / 5`}
            <img className="rating__icon"
                src={starIcon} alt="star" />
        </p>)
}

export default Rating;