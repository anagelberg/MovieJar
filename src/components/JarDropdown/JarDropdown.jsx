import './JarDropdown.scss';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import { useState, useEffect } from 'react';

function JarDropdown({ jars }) {

    const [jarOptions, setJarOptions] = useState(jars.map((jar) => { return { name: jar.name, value: jar.jarId } }))
    const [selected, setSelected] = useState(jarOptions[0]);

    const handleChange = (option) => {
        setSelected(option);
        //setSelectedJar for form 
    };


    return (
        <div className='jar-select'>
            <label className='jar-select__label'>select jar
                <CustomDropdown
                    options={jarOptions}
                    selected={selected}
                    onChange={handleChange} />
            </label>
        </div>
    )
}

export default JarDropdown;