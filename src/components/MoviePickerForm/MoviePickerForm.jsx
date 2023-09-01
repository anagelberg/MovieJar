import './MoviePickerForm.scss';
import MentalVibeDropdown from '../MentalVibeDropdown/MentalVibeDropdown';
import EmotionalVibeDropdown from '../EmotionalVibeDropdown/EmotionalVibeDropdown';
import Button from '../Button/Button';
import JarDropdown from '../JarDropdown/JarDropdown';
import RuntimeSlider from '../RuntimeSlider/RuntimeSlider';
import { useState, useEffect } from 'react';

function MoviePickerForm({ jars }) {

    const [sliderValue, setSliderValue] = useState(50);

    useEffect(() => {
        console.log(jars);
    }, [])

    return (
        <form className='picker'>
            <div className='picker__form-options'>
                <h4>Select Movie Options</h4>

                <JarDropdown jars={jars} />
                <MentalVibeDropdown />
                <EmotionalVibeDropdown />
                <RuntimeSlider value={sliderValue}
                    onChange={(val) => setSliderValue(val)} />
            </div>
        </form>
    )
}

export default MoviePickerForm;