import './ClosingX.scss';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'

function ClosingX({ closeHandler }) {
    return <CloseIcon
        className="close-x"
        onClick={closeHandler} />
}

export default ClosingX;