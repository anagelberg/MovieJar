import './MoviePickerForm.scss';
import JarDropdown from '../JarDropdown/JarDropdown';
import RuntimeSlider from '../RuntimeSlider/RuntimeSlider';
import { useState, useEffect } from 'react';
import CheckboxDropdown from '../CheckboxDropdown/CheckboxDropdown';

function MoviePickerForm({ jars, loadJar, currentJar, filters, setFilters }) {


    const [selectedMentalVibe, setSelectedMentalVibe] = useState(filters.mentalVibe);
    const [selectedEmotionalVibe, setSelectedEmotionalVibe] = useState(filters.emotionalVibe);
    const [maxRunTime, setMaxRunTime] = useState(180);

    useEffect(() => {
        const newFilters = {
            mentalVibe: selectedMentalVibe,
            emotionalVibe: selectedEmotionalVibe,
            maxRunTime: maxRunTime
        }
        setFilters(newFilters);
    }, [selectedMentalVibe, selectedEmotionalVibe, maxRunTime])


    return (
        <form className='picker'>
            <div className='picker__form-options'>
                <h4>Select Movie Options</h4>

                <JarDropdown jars={jars}
                    loadJar={loadJar}
                    startingId={currentJar?.id} />

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
                    value={maxRunTime}
                    onChange={(val) => setMaxRunTime(val)}
                    min={50}
                    max={200} />

            </div>
        </form>
    )
}

export default MoviePickerForm;