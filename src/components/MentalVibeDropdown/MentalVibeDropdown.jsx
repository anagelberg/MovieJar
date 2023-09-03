import './MentalVibeDropdown.scss';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import { useState } from 'react';


function MentalVibeDropdown() {
    const options = [
        { name: "Neutral", value: "Neutral" },
        { name: "Thought-provoking", value: "Thought-provoking" },
        { name: "Brainless", value: "Brainless" }
    ]


    const [selected, setSelected] = useState(options[0]);

    const handleChange = (option) => {
        setSelected(option);
        //setSelectedJar for form 
    };

    return (
        <div className='mentalVibe'>
            <label className='mentalVibe__label'>select mental vibe
                <CustomDropdown
                    options={options}
                    selected={selected}
                    onChange={handleChange} />
            </label>
        </div>
    )
}

export default MentalVibeDropdown;


