
import './CurrentUserAvatar.scss';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import UserAvatar from "../UserAvatar/UserAvatar";
import { ReactComponent as ArrowIcon } from '../../assets/icons/chevron.svg'

function CurrentUserAvatar({ isMenu }) {
    const { currentUser } = useContext(UserContext);

    return (
        <div className="current-user-avatar">
            <UserAvatar img={currentUser?.google_photo} />
            {isMenu && <ArrowIcon className="current-user-avatar__arrow" />}
        </div>
    );
}

export default CurrentUserAvatar;