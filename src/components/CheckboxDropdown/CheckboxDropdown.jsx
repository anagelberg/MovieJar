import React, { useState } from "react";
import "./CheckboxDropdown.scss";
import { ReactComponent as ArrowIcon } from '../../assets/icons/chevron.svg'

const CheckboxDropdown = ({ title, items }) => {

    const [isOpen, setIsOpen] = useState(true);
    const [selectedItems, setSelectedItems] = useState(Object.fromEntries(items.map(item => [item, true])));


    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleItemChange = (item) => {
        setSelectedItems((prev) => ({
            ...prev,
            [item]: !prev[item],
        }));
        console.log('selected items', selectedItems);
    };

    return (
        <div className="dropdown">
            <div className="dropdown__title" onClick={toggleDropdown}>
                {title}
                <ArrowIcon className="dropdown__arrow" />
            </div>
            <div
                className={`dropdown__content ${isOpen ? "dropdown__content--open" : ""
                    }`}
            >
                {items.map((item) => (
                    <div key={item} className="dropdown__item">
                        <input
                            type="checkbox"
                            id={`checkbox-${item}${title}`}
                            checked={selectedItems[item] || false}
                            onChange={() => handleItemChange(item)}
                        />
                        <label htmlFor={`checkbox-${item}${title}`}>{item}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CheckboxDropdown;

