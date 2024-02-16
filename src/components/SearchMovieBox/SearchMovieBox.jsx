import './SearchMovieBox.scss';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'



function SearchMovieBox({ modifier }) {

    const navigate = useNavigate();

    const handleSearchBarEntry = (e) => {
        const fieldValue = e.target.value
        if (e.key === 'Enter' && fieldValue.length >= 1) {
            navigate(`/search/${fieldValue}`)
        }
    }

    return (
        <div className={`search search${modifier}`}>
            <SearchIcon className='search__icon' />
            <input
                className={`search__input search__input${modifier}`}
                placeholder="Find movies..."
                onKeyDown={(e) => { handleSearchBarEntry(e) }}
            ></input>
        </div>
    )
}

export default SearchMovieBox;
