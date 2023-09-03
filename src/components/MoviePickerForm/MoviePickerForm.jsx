import './MoviePickerForm.scss';
import MentalVibeDropdown from '../MentalVibeDropdown/MentalVibeDropdown';
import EmotionalVibeDropdown from '../EmotionalVibeDropdown/EmotionalVibeDropdown';
import Button from '../Button/Button';
import JarDropdown from '../JarDropdown/JarDropdown';
import RuntimeSlider from '../RuntimeSlider/RuntimeSlider';
import { useState, useEffect } from 'react';
import CheckboxDropdown from '../CheckboxDropdown/CheckboxDropdown';

function MoviePickerForm({ jars, loadJar, currentJar, filters, setFilters }) {

    const [sliderValue, setSliderValue] = useState(50);

    const [selectedMentalVibe, setSelectedMentalVibe] = useState(filters.mentalVibe);
    const [selectedEmotionalVibe, setSelectedEmotionalVibe] = useState(filters.emotionalVibe);

    useEffect(() => {
        const newFilters = {
            mentalVibe: selectedMentalVibe,
            emotionalVibe: selectedEmotionalVibe
        }
        setFilters(newFilters);
    }, [selectedMentalVibe, selectedEmotionalVibe])


    return (
        <form className='picker'>
            <div className='picker__form-options'>
                <h4>Select Movie Options</h4>

                <JarDropdown jars={jars}
                    loadJar={loadJar}
                    startingId={currentJar.id} />

                <CheckboxDropdown
                    title="Select Mental Vibe"
                    items={Object?.keys(filters?.mentalVibe)}
                    selected={selectedMentalVibe}
                    setSelected={setSelectedMentalVibe}
                />
                <CheckboxDropdown
                    title="Select Emotional Vibe"
                    items={Object?.keys(filters?.emotionalVibe)}
                    selected={selectedEmotionalVibe}
                    setSelected={setSelectedEmotionalVibe}

                />
                <RuntimeSlider
                    value={sliderValue}
                    onChange={(val) => setSliderValue(val)} />

            </div>
        </form>
    )
}

export default MoviePickerForm;