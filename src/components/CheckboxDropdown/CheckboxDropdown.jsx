import React, { useEffect, useState } from "react";
import "./CheckboxDropdown.scss";
import { ReactComponent as ArrowIcon } from '../../assets/icons/chevron.svg'

const CheckboxDropdown = ({ title, items, selected, setSelected }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => setIsOpen(!isOpen);

    /* Handle change of checkboxes */
    const handleItemChange = (item, setSelected) => {
        setSelected((prev) => ({
            ...prev,
            [item]: !prev[item],
        }))
    };

    useEffect(() => {
        const initialVal = Object.fromEntries(items.map(item => [item, true]));
        setSelected(initialVal);

    }, [])


    return (
        <div className="dropdown">
            <div className="dropdown__title" onClick={toggleDropdown}>
                <div className="dropdown__title-line">
                    {title}
                    <ArrowIcon className="dropdown__arrow" />
                </div>
            </div>
            <div
                className={`dropdown__content ${isOpen ? "dropdown__content--open" : ""
                    }`}
            >
                {items?.map((item) => (
                    <div key={item} className="dropdown__item">
                        <input
                            type="checkbox"
                            id={`checkbox-${item}${title}`}
                            checked={selected?.[item]}
                            onChange={() => handleItemChange(item, setSelected)}
                        />
                        <label htmlFor={`checkbox-${item}${title}`}>{item}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CheckboxDropdown;

