import './VibeDropdown.scss';
import CustomDropdown from '../CustomDropdown/CustomDropdown';


function VibeDropdown({ label, selected, setSelected, options }) {

    return (
        <div className='vibeDrop'>
            <label className='vibeDrop__label'>{label}
                <CustomDropdown
                    options={options}
                    selected={selected}
                    onChange={option => setSelected(option)} />
            </label>
        </div>
    )
}

export default VibeDropdown;


