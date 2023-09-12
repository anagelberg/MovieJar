import './AddJarModal.scss';
import Modal from '../Modal/Modal';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'
import Button from '../Button/Button';

function AddJarModal({ show, closeHandler, addAction }) {
    return (
        <Modal
            show={show}
            headerContent={() => {
                //TODO: EDIT THIS
                return <CloseIcon className="del-modal__close" onClick={closeHandler} />
            }}
            bodyContent={() => <p>hello</p>}
            footerContent={() => {
                return (
                    <>
                        <Button
                            text="Cancel"
                            modifier="--reverse"
                            onClick={() => closeHandler()}
                        />

                        <Button
                            text="Add"
                            onClick={() => addAction()}
                        />

                    </>
                )
            }}
        />
    )
}

export default AddJarModal;