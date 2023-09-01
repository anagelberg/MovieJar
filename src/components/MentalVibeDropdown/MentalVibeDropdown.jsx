import './MentalVibeDropdown.scss';

function MentalVibeDropdown() {
    return (
        <div>
            <label htmlFor='mentalVibe' className='add-form__label'>Select Mental Vibe</label>
            <select name="mentalVibe" id='mentalVibe'>
                <option value='Neutral' selected>Neutral</option>
                <option value='Thought-provoking'>Thought-provoking</option>
                <option value='Brainless'>Brainless</option>
            </select>
        </div>
    )
}

export default MentalVibeDropdown;