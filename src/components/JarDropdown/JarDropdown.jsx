import './JarDropdown.scss';

//TODO ADDD JARS
function JarDropdown({ jars }) {
    return (
        <div className='jar-select'>
            <label htmlFor="jar" className='jar-select__label'>select jar</label>
            <select name="jar" id='jar'>
                {jars.map(jar => {
                    return <option value={jar.jarId}>{jar.name}</option>
                })}

            </select>

        </div>
    )
}

export default JarDropdown;