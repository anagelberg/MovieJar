
import './RuntimeSlider.scss';
import { useState } from 'react';

function RuntimeSlider({ value, onChange, min, max }) {
    const [perFilled, setPerFilled] = useState((value - min) * 100 / (max - min));

    const handleChange = (event) => {
        onChange(event.target.value);
        setPerFilled((event.target.value - min) * 100 / (max - min));
    };

    return (
        <div className="slider">
            <div className="slider__contents">
                <label className="slider__label" htmlFor='runtime-slider'>Select max runtime (minutes)</label>
                <div className="slider__track">
                    <div
                        className="slider__track-filled"
                        style={{ width: `${perFilled}%` }}
                    >
                    </div>
                </div>
                <input
                    type="range"
                    min={min}
                    max={max}
                    id="runtime-slider"
                    value={value}
                    aria-valuemin={min}
                    aria-valuemax={max}
                    aria-valuenow={value}
                    onChange={handleChange}
                    className="slider__slider"
                />

            </div>
            <div className="slider__value">{value}{value >= 200 && '+'}</div>
        </div>
    );
}

export default RuntimeSlider;
