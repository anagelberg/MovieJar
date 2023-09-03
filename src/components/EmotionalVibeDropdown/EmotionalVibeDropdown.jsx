import './EmotionalVibeDropdown.scss';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import { useState } from 'react';


function EmotionalVibeDropdown() {
    const options = [
        { name: "Neutral", value: "Neutral" },
        { name: "Heavy-hearted", value: "Heavy-hearted" },
        { name: "Light-hearted", value: "Light-hearted" }
    ]

    const [selected, setSelected] = useState(options[0]);

    const handleChange = (option) => {
        setSelected(option);
        //setSelectedJar for form 
    };

    return (
        <div className='emotionalVibe'>
            <label className='emotionalVibe__label'>select emotional vibe
                <CustomDropdown
                    options={options}
                    selected={selected}
                    onChange={handleChange} />
            </label>
        </div>
    )
}

export default EmotionalVibeDropdown;




