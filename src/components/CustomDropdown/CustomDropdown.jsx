/* This was generated with help of chatGPT to match colors */

import './CustomDropdown.scss';
import { useState, useRef, useEffect } from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/icons/chevron.svg'

function CustomDropdown({ options, selected, onChange }) {
    // Receives options in form of an array with name and value attributes.

    const [showOptions, setShowOptions] = useState(false);
    const [optionsHover, setOptionsHover] = useState(false);
    const optionsRef = useRef(null);

    const handleClickOutside = (event) => {
        if (optionsRef.current && !optionsRef.current.contains(event.target)) {
            setShowOptions(false);
            setOptionsHover(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener when the component is unmounted
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className="select" ref={optionsRef}>
            <div className="select__selected"
                onClick={() => showOptions ? setShowOptions(false) : setShowOptions(true)}>
                {selected?.name}
                <ArrowIcon />
            </div>
            {showOptions && (
                <div className="select__options" >
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                onChange(option)
                                setOptionsHover(false)
                                setShowOptions(false)
                            }}
                            value={option.value}
                            onMouseEnter={() => setOptionsHover(true)}
                            className={(option.value === selected.value && !optionsHover) ? 'select__option select__option--selected' : 'select__option '}
                        >
                            {option.name}
                        </div>
                    ))}
                </div>)}

        </div>
    );
}


export default CustomDropdown;
