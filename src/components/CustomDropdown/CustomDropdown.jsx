/* This was generated with chatGPT to match colors */

import React from 'react';
import PropTypes from 'prop-types';
import './CustomDropdown.scss';

function CustomDropdown({ options, selected, onChange }) {
    return (
        <div className="dropdown">
            <div className="dropdown-selected">
                {selected}
            </div>
            <div className="dropdown-options">
                {options.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => onChange(option)}
                        className={option === selected ? 'dropdown-option selected' : 'dropdown-option'}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
}

CustomDropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default CustomDropdown;
