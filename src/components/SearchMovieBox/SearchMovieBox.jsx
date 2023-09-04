import './SearchMovieBox.scss';
import { useNavigate } from 'react-router-dom';

function SearchMovieBox({ modifier }) {

    const navigate = useNavigate();

    const handleSearchBarEntry = (e) => {
        const fieldValue = e.target.value
        if (e.key === 'Enter' && fieldValue.length >= 3) {
            navigate(`/search/${fieldValue}`)
        }
    }

    return (
        <input
            className={`search search${modifier}`}
            placeholder="Find movies..."
            onKeyDown={(e) => { handleSearchBarEntry(e) }}

        ></input>
    )
}

export default SearchMovieBox;
