import './JarDropdown.scss';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import { useState, useEffect } from 'react';

function JarDropdown({ jars, startingId, loadJar }) {

    const [jarOptions, setJarOptions] = useState(jars.map((jar) => { return { name: jar.name, value: jar.jarId } }))
    const [selected, setSelected] = useState(jarOptions.find(option => option.value === startingId));

    const handleJarChange = (jar) => {
        setSelected(jar);
        loadJar(jar.value);
    };


    return (
        <div className='jar-select'>
            <label className='jar-select__label'>select jar
                <CustomDropdown
                    options={jarOptions}
                    selected={selected}
                    onChange={handleJarChange} />
            </label>
        </div>
    )
}

export default JarDropdown;