import './EditDelIcons.scss';
import delIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/edit.svg";


function EditDelIcons({ delClick, editClick }) {
    return (
        <div className="icons">
            <img className="icons__icon" src={editIcon} alt="pencil icon" />
            <img className="icons__icon" src={delIcon} alt="trashcan icon" onClick={delClick} />
        </div>
    )
}

export default EditDelIcons;