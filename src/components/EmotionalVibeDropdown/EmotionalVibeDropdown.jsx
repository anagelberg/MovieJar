import './EmotionalVibeDropdown.scss';

function EmotionalVibeDropdown() {
    return (
        <div>
            <label htmlFor='emotionalVibe' className='add-form__label'>Select Emotional Vibe</label>
            <select name="emotionalVibe" id="emotionalVibe">
                <option value='Neutral' selected>Neutral</option>
                <option value='Light-hearted'>Light-hearted</option>
                <option value='Brainless'>Heavy-hearted</option>
            </select>
        </div>
    )
}


export default EmotionalVibeDropdown;


