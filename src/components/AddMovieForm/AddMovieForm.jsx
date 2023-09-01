import './AddMovieForm.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import MentalVibeDropdown from '../MentalVibeDropdown/MentalVibeDropdown';
import EmotionalVibeDropdown from '../EmotionalVibeDropdown/EmotionalVibeDropdown';



function AddMovieForm({ movie, jars, addMovie }) {
    const [selectedOptions, setSelectedOptions] = useState(new Set());

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        const newSelectedOptions = new Set(selectedOptions);
        newSelectedOptions.has(value) ? newSelectedOptions.delete(value) :
            newSelectedOptions.add(value);

        setSelectedOptions(newSelectedOptions);
    }

    const handleSubmitClicked = (e) => {
        e.preventDefault();

        const userData = {
            mental_vibe: e.target.mentalVibe.value,
            emotional_vibe: e.target.emotionalVibe.value
        }

        selectedOptions.size === 0
            ? console.log("Invalid; need at least one jar") //add errors later
            : addMovie(userData, [...selectedOptions], movie.id, movie);

    }


    return (
        <form onSubmit={handleSubmitClicked} className="add-form">
            <h4>Add <span className="add-form__highlight">{movie.title} ({movie.release_date})</span> to your jar(s)?</h4>


            <div>
                <label className='add-form__label'>Select Jar(s)</label>

                <div className="add-form__jar-options">
                    {
                        jars.map((jar, key) => {
                            return <div>
                                <label>
                                    <input className='add-form__checkbox' type="checkbox" value={jar.jarId} onChange={handleCheckboxChange} checked={selectedOptions.has(`${jar.jarId}`)}>
                                    </input>
                                    {jar.name}
                                </label>
                            </div>
                        })
                    }
                </div>
            </div>

            <MentalVibeDropdown />
            <EmotionalVibeDropdown />

            <Button text="OK" type="submit" />
        </form >
    )
}

export default AddMovieForm;