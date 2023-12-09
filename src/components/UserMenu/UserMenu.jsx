import './UserMenu.scss';
import { ReactComponent as ArrowIcon } from '../../assets/icons/chevron.svg'
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout.svg'
import axios from 'axios';
import { useRef, useEffect, useState } from 'react';
import CurrentUserAvatar from '../CurrentUserAvatar/CurrentUserAvatar';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

function UserMenu({ setIsSideBarOpen }) {
    const navigate = useNavigate();
    const { setIsAuthenticated, setCurrentUser } = useContext(UserContext);

    const menuRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mouseup', handleClickOutside);

        // Clean up the event listener when the component is unmounted
        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
        };
    }, []);



    const handleLogout = async () => {

        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/logout`);
            navigate('/not-found');
            setIsSideBarOpen(false) //aesthetic
            setIsAuthenticated(false);
            setCurrentUser(null);
        } catch (err) {
            console.log('Error at handle logout', err);
        }
    }


    return (
        <div className='user-menu' ref={menuRef} onClick={() => setIsOpen(prev => !prev)}>

            <CurrentUserAvatar className='user-menu__avatar' />
            <ArrowIcon className='user-menu__arrow' />


            {isOpen &&
                <div className="user-menu__options">
                    <div className="user-menu__option" onClick={handleLogout}>
                        <LogoutIcon className='user-menu__logout-icon' />
                        <p className='user-menu__option-text'>Log Out</p>
                    </div>
                </div>
            }

        </div>
    )
}

export default UserMenu;