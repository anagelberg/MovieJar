import Button from "../Button/Button";
import "./DeleteModal.scss";
import closeHeaderIcon from "../../assets/icons/close.svg";
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'

function DeleteModal({ show, closeHandler, headText, bodyText, delAction }) {
    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__top">
                    <div className="modal__header">
                        <CloseIcon className="modal__close" onClick={closeHandler}
                        />
                    </div>



                    <div className="modal__text">
                        <h2>{headText}</h2>
                        <p>{bodyText}</p>
                    </div>
                </div>

                <div className="modal__btn-container">
                    <Button
                        text="Cancel"
                        modifier="--reverse"
                        onClick={() => closeHandler()}
                    />

                    <Button
                        text="Delete"
                        modifier="--delete"
                        onClick={() => delAction()}
                    />
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;