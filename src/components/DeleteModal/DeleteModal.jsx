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
                    <>
                        <h2>{headText}</h2>
                        <p>{bodyText}</p>
                    </>
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