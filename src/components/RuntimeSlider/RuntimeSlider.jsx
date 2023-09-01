
import './RuntimeSlider.scss';


function RuntimeSlider({ value, onChange }) {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <div className="container">
            <div className="slider">
                <label className="slider__label" htmlFor='runtime-slider'>Select max runtime</label>
                <div className="slider__track">
                    <div
                        className="slider__track-filled"
                        style={{ width: `${value}%` }}
                    ></div>
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    id="runtime-slider"
                    value={value}
                    onChange={handleChange}
                    className="slider__slider"
                />

            </div>
            <div className="slider__value">{value}</div>
        </div>
    );
}

export default RuntimeSlider;
