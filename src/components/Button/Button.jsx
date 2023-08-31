import './Button.scss';

function Button({ modifiers, text, icon, ...buttonAttributes }) {
    return (
        <button className={`cta cta${modifiers}`} {...buttonAttributes}>
            <div className="cta__contents">
                {icon && <img className="cta__icon" src={icon} alt="button icon"></img>}
                {text}
            </div>
        </button>
    );
}

export default Button;