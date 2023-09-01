import './AddMoviePage.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCardPreview from '../../components/MovieCardPreview/MovieCardPreview';
import AddMovieForm from '../../components/AddMovieForm/AddMovieForm';
import closeIcon from "../../assets/icons/close.svg";


function AddMoviePage({ jars }) {
    const params = useParams();
    const [searchResults, setSearchResults] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);


    const addMovie = (userData, jars, movieId, movie) => {
        console.log("Movie", movie);


        // add the user data for the movie
        axios.post(`${process.env.REACT_APP_BASE_URL}/user/1/movie/${movieId}`, userData)
            .then(response => {
                console.log(response)
            }).then(() => { // async to avoid error trying to add movie twice
                jars.forEach(jar => {
                    axios.post(`${process.env.REACT_APP_BASE_URL}/jar/${jar}/movie/${movieId}`).then((response) => console.log(response)).catch(err => { console.log(err) });
                })
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        setSearchResults([]);
        setSelectedMovie(null);
        params.term && axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${params.term}`).then((response) => {
            setSearchResults(response.data.results);
        }).catch(err => {
            console.log("Error searching TMDB");
        })
    }, [params])

    return (
        <div>
            <h1>Add Movies</h1>
            <div className="add">
                {selectedMovie && (
                    <div className='add__form'>
                        <img className="add__close" src={closeIcon} alt="x" onClick={() => {
                            setSelectedMovie(null)
                        }} />
                        <AddMovieForm movie={selectedMovie} jars={jars} addMovie={addMovie} />
                    </div>
                )}

                <div className='add__search-results'>
                    {searchResults?.map((movie) => movie.poster_path && //only shows movies with poster
                        <MovieCardPreview movie={movie} setSelectedMovie={setSelectedMovie} selected={selectedMovie === movie} />)}
                </div>
            </div>
        </div>
    )
}

export default AddMoviePage;