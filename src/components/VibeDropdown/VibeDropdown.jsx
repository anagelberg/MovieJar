import './VibeDropdown.scss';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import { useEffect } from 'react';


function VibeDropdown({ label, selected, setSelected, options }) {

    useEffect(() => {
        setSelected(options[0]);
        // eslint-disable-next-line
    }, [])

    const handleChange = (option) => {
        setSelected(option);
        console.log(option);
        console.log(selected);
    };

    return (
        <div className='vibeDrop'>
            <label className='vibeDrop__label'>{label}
                <CustomDropdown
                    options={options}
                    selected={selected}
                    onChange={handleChange} />
            </label>
        </div>
    )
}

export default VibeDropdown;


