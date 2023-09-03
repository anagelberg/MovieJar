import './SideForm.scss';
import closeIcon from "../../assets/icons/close.svg";

function SideForm({ onClose, form }) {

    return (
        <div className='side-form'>
            <img className="side-form__close" src={closeIcon} alt="x" onClick={onClose} />
            {form()}
        </div>
    )

}

export default SideForm;