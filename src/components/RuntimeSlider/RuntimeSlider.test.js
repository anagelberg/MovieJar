import { render, screen, fireEvent } from '@testing-library/react';
import RuntimeSlider from './RuntimeSlider';

describe("RuntimeSlider component", () => {

    it('renders with initial value and calculates the filled percentage correctly', () => {
        const initialValue = 50;
        const min = 0;
        const max = 100;
        const perFilled = ((initialValue - min) * 100) / (max - min);

        const { container } = render(<RuntimeSlider value={initialValue} onChange={() => { }} min={min} max={max} />);

        const sliderElement = screen.getByRole('slider');
        expect(sliderElement.value).toBe(String(initialValue));

        const filledTrack = container.querySelector('.slider__track-filled');
        expect(filledTrack.style.width).toBe(`${perFilled}%`);
    });

    it('updates value and filled percentage on slider change', () => {
        const handleChange = jest.fn();
        const initialValue = 20;
        const newValue = 40;
        const min = 0;
        const max = 100;
        const newPerFilled = ((newValue - min) * 100) / (max - min);

        const { container } = render(<RuntimeSlider value={initialValue} onChange={handleChange} min={min} max={max} />);

        const sliderElement = screen.getByRole('slider');
        fireEvent.change(sliderElement, { target: { value: newValue } });

        expect(handleChange).toHaveBeenCalledWith(String(newValue));

        const filledTrack = container.querySelector('.slider__track-filled');
        expect(filledTrack.style.width).toBe(`${newPerFilled}%`);
    });

    it('displays + sign when value is 200 or more', () => {
        render(<RuntimeSlider value={200} onChange={() => { }} min={0} max={300} />);
        expect(screen.getByText('200+')).toBeInTheDocument();
    });


    it('has correct ARIA attributes for accessibility', () => {

        const initialValue = 50;
        const min = 0;
        const max = 100;

        render(<RuntimeSlider value={initialValue} onChange={() => { }} min={min} max={max} />);

        const sliderElement = screen.getByRole('slider');
        expect(sliderElement.getAttribute('aria-valuemin')).toBe(String(min));
        expect(sliderElement.getAttribute('aria-valuemax')).toBe(String(max));
        expect(sliderElement.getAttribute('aria-valuenow')).toBe(String(initialValue));
    });

});