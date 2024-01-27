import './ClosingX.scss';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'

function ClosingX({ closeHandler, modifier }) {
    return <CloseIcon
        data-testid="closing-x"
        className={modifier
            ? `close-x close-x${modifier}`
            : "close-x"
        }
        onClick={closeHandler} />
}

export default ClosingX;