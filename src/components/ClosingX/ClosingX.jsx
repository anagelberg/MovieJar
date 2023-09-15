import './ClosingX.scss';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'

//TODO: add light and dark and add to all 
function ClosingX({ closeHandler }) {
    return <CloseIcon
        className="close-x"
        onClick={closeHandler} />
}

export default ClosingX;