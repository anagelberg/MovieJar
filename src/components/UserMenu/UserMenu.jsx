import './UserMenu.scss';
import { ReactComponent as ArrowIcon } from '../../assets/icons/chevron.svg'
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout.svg'

import { useRef, useEffect, useState } from 'react';
import CurrentUserAvatar from '../CurrentUserAvatar/CurrentUserAvatar';

function UserMenu() {

    const menuRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOutside = (event) => {
        event.stopPropagation();
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
        console.log('triggered handle click outside');
    };

    useEffect(() => {
        document.addEventListener('mouseup', handleClickOutside);

        // Clean up the event listener when the component is unmounted
        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
        };
    }, []);



    return (
        <div className='user-menu' ref={menuRef} onClick={() => setIsOpen(prev => !prev)}>

            <CurrentUserAvatar className='user-menu__avatar' />
            <ArrowIcon className='user-menu__arrow' />


            {isOpen &&
                <div className="user-menu__options">
                    <div className="user-menu__option">
                        <LogoutIcon className='user-menu__logout-icon' />
                        <p className='user-menu__option-text'>Log Out</p>
                    </div>
                </div>
            }

        </div>
    )
}

export default UserMenu;