import './Button.scss';

function Button({ modifier, text, icon, ...buttonAttributes }) {
    return (
        <button className={`cta cta${modifier}`} {...buttonAttributes}>
            <div className="cta__contents">
                {icon && <img className="cta__icon" src={icon} alt="button icon"></img>}
                {text}
            </div>
        </button>
    );
}

export default Button;