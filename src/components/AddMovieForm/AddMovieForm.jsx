import './AddMovieForm.scss';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import VibeDropdown from '../VibeDropdown/VibeDropdown';


function AddMovieForm({ movie, jars, addMovie, currentJar }) {
    const [selectedOptions, setSelectedOptions] = useState(new Set());
    const [mentalVibe, setMentalVibe] = useState({ name: 'Neutral', value: 'Neutral' });
    const [emotionalVibe, setEmotionalVibe] = useState({ name: 'Neutral', value: 'Neutral' });
    const [selectError, setSelectError] = useState(false);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        const newSelectedOptions = new Set(selectedOptions);
        newSelectedOptions.has(value) ? newSelectedOptions.delete(value) :
            newSelectedOptions.add(value);


        setSelectedOptions(newSelectedOptions);

    }

    useEffect(() => {
        selectedOptions.size > 0 && setSelectError(false);
    }, [selectedOptions])

    const handleSubmitClicked = (e) => {
        e.preventDefault();

        const userData = {
            mental_vibe: mentalVibe.value,
            emotional_vibe: emotionalVibe.value
        }

        selectedOptions.size === 0
            ? setSelectError(true)
            : addMovie(userData, [...selectedOptions], movie.id, movie);
    }

    useEffect(() => {
        const newSelectedOptions = new Set(selectedOptions);
        currentJar && newSelectedOptions.add(`${currentJar.id}`);
        setSelectedOptions(newSelectedOptions);
    }, [currentJar])


    return (
        <form onSubmit={handleSubmitClicked} className="add-form">
            <h4>Add <span className="add-form__highlight">{movie.title} ({movie.release_date.split("-")[0]})</span> to collection?</h4>


            <div>
                <label
                    className={
                        selectError
                            ? 'add-form__label add-form__label--error'
                            : 'add-form__label '}>
                    Select Jar(s)
                </label>

                <div className="add-form__jar-options">
                    {
                        jars
                            .map((jar, key) => {
                                return (
                                    <div key={key}>
                                        <label>
                                            <input
                                                className='add-form__checkbox' type="checkbox"
                                                value={jar.jarId}
                                                onChange={handleCheckboxChange}
                                                checked={selectedOptions.has(`${jar.jarId}`)}></input>
                                            {jar.name}
                                        </label>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>

            <VibeDropdown
                label="select mental vibe"
                setSelected={setMentalVibe}
                selected={mentalVibe}
                options={[
                    { name: "Brainless", value: "Brainless" },
                    { name: "Neutral", value: "Neutral" },
                    { name: "Thought-provoking", value: "Thought-provoking" }
                ]} />

            <VibeDropdown
                label="select emotional vibe"
                setSelected={setEmotionalVibe}
                selected={emotionalVibe}
                options={[
                    { name: "Light-hearted", value: "Light-hearted" },
                    { name: "Neutral", value: "Neutral" },
                    { name: "Heavy-hearted", value: "Heavy-hearted" }
                ]} />

            <Button text="OK" type="submit" />
        </form >
    )
}

export default AddMovieForm;