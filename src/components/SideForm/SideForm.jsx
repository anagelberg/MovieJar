import './SideForm.scss';
import ClosingX from '../ClosingX/ClosingX';

function SideForm({ onClose, form }) {

    return (
        <div className='side-form'>
            <ClosingX closeHandler={onClose} modifier='--light' />
            {form()}
        </div>
    )

}

export default SideForm;