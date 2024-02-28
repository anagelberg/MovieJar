import Button from "../Button/Button";
import "./DeleteModal.scss";
import ClosingX from "../ClosingX/ClosingX";
import Modal from "../Modal/Modal";

function DeleteModal({ show, closeHandler, headText, bodyText, delAction }) {

    return (
        < Modal
            show={show}
            headerContent={() => {
                return <ClosingX closeHandler={closeHandler} />
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
                            aria-label="cancel"
                            onClick={() => closeHandler()}
                        />

                        <Button
                            text="Delete"
                            modifier="--delete"
                            aria-label="delete"
                            onClick={() => delAction()}
                        />

                    </>
                )
            }}
        />

    );
}

export default DeleteModal;