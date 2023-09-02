import './JarDropdown.scss';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import { useState } from 'react';

//TODO ADDD JARS
function JarDropdown({ jars }) {
    const [selected, setSelected] = useState('Option 1');

    const options = ['Option 1', 'Option 2', 'Option 3'];

    const handleChange = (option) => {
        setSelected(option);
    };


    return (
        <div className='jar-select'>
            <label htmlFor="jar" className='jar-select__label'>select jar</label>
            <select name="jar" id='jar'>
                {jars.map(jar => {
                    return <option value={jar.jarId}>{jar.name}</option>
                })}

            </select>
            <CustomDropdown options={options} selected={selected} onChange={handleChange} />

        </div>
    )
}

export default JarDropdown;