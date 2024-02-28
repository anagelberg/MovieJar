import "./Modal.scss";

function Modal({ headerContent, bodyContent, footerContent, show }) {
    if (!show) return null;

    return (
        <div className="modal" role="dialog">
            <div className="modal__content">
                <div className="modal__top">
                    <div className="modal__header">
                        {headerContent()}
                    </div>

                    <div className="modal__body">
                        {bodyContent()}
                    </div>
                </div>

                {footerContent && (
                    <div className="modal__footer">
                        {footerContent()}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Modal;