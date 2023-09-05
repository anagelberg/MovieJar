import Button from "../Button/Button";
import "./DeleteModal.scss";
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'
import Modal from "../Modal/Modal";

function DeleteModal({ show, closeHandler, headText, bodyText, delAction }) {

    return (
        < Modal
            show={show}
            headerContent={() => {
                return <CloseIcon className="del-modal__close" onClick={closeHandler} />
            }}

            bodyContent={() => {
                return (
                    <div className="del-modal__text">
                        <h4>{headText}</h4>
                        <p>{bodyText}</p>
                    </div>
                )
            }}

            footerContent={() => {
                return (
                    <>
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

                    </>
                )
            }}
        />

    );
}

export default DeleteModal;