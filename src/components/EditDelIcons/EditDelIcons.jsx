import './EditDelIcons.scss';
import { ReactComponent as DelIcon } from '../../assets/icons/delete.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';


function EditDelIcons({ delClick, editClick }) {
    return (
        <div className="icons">
            <DelIcon className="icons__del" onClick={delClick} />
            <EditIcon className="icons__edit" onClick={editClick} />
        </div>
    )
}

export default EditDelIcons;