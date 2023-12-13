import './AddMoviePage.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import MovieCardPreview from '../../components/MovieCardPreview/MovieCardPreview';
import AddMovieForm from '../../components/AddMovieForm/AddMovieForm';
import SideForm from '../../components/SideForm/SideForm';
import SearchMovieBox from '../../components/SearchMovieBox/SearchMovieBox';
import LoadingCircle from '../../components/LoadingCircle/LoadingCircle';
import { UserContext } from '../../contexts/UserContext';

function AddMoviePage({ jars, currentJar }) {
    const params = useParams();
    const { currentUser } = useContext(UserContext);
    const [searchResults, setSearchResults] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [loading, setLoading] = useState(params.term ? true : false);


    const addMovie = (userData, jars, movieId) => {

        // add the user data for the movie. Note will overwrite existing data -- TODO come back and add confirm popup later.  
        axios.post(`${process.env.REACT_APP_BASE_URL}/user/${currentUser.id}/movie/${movieId}`, userData, { withCredentials: true })
            .then((res) => { // async to avoid error trying to add movie twice overlapping
                console.log("added user data to jar", res)
                jars.forEach(jar => {
                    // note -- if movie exists in jar already, this will return a 400 bad request, but it is ultimately inconsequential so is being left for now. 
                    axios
                        .post(`${process.env.REACT_APP_BASE_URL}/jar/${jar}/movie/${movieId}`, null, { withCredentials: true })
                        .then((res) => {
                            console.log('added movie to jar', jar, res)
                            setSelectedMovie(null)
                        })
                        .catch(err => { console.log(err) });
                })
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        params.term && setLoading(true);
        setSearchResults(null);
        setSelectedMovie(null);
        params.term && axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${params.term}`)
            .then((response) => {
                setSearchResults(response.data.results);
                setLoading(false);
            })
            .catch(err => {
                console.log("Error searching TMDB");
            })
    }, [params])

    return (
        <div className={selectedMovie ? "add add--selected" : "add"}>
            <div className={(searchResults?.length === 0 || !searchResults) && !loading
                ? 'add__center-container add__center-container--centered'
                : 'add__center-container'}>

                <h1>Add Movies</h1>
                {selectedMovie && (
                    <SideForm
                        onClose={() => {
                            setSelectedMovie(null)
                        }}
                        form={() => {
                            return <AddMovieForm
                                movie={selectedMovie}
                                jars={jars}
                                addMovie={addMovie}
                                currentJar={currentJar}
                            />

                        }}
                    />
                )}

                <div className='add__search-results'>


                    {searchResults?.length === 0 &&
                        <div className='add__no-results'>
                            <h3>No movies with that title were found in TMDB </h3>
                            <SearchMovieBox />
                        </div>
                    }



                    {searchResults
                        ? searchResults.map(movie => {
                            return (
                                movie.poster_path && //only shows movies with poster
                                <MovieCardPreview
                                    key={movie.id}
                                    movie={movie}
                                    setSelectedMovie={setSelectedMovie}
                                    selected={selectedMovie === movie} />
                            )
                        })
                        : loading ? <LoadingCircle /> : <SearchMovieBox />
                    }

                </div>
            </div>
        </div>
    )
}

export default AddMoviePage;