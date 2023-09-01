import './SideForm.scss';
import closeIcon from "../../assets/icons/close.svg";

function SideForm({ onClose, form }) {

    return (
        <div className='add__form'>
            <img className="add__close" src={closeIcon} alt="x" onClick={onClose} />
            {form()}
        </div>
    )

}

export default SideForm;