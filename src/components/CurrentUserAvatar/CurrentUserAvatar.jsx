
import './CurrentUserAvatar.scss';
import { useContext, useState, useRef } from "react";
import { UserContext } from "../../contexts/UserContext";
import UserAvatar from "../UserAvatar/UserAvatar";

function CurrentUserAvatar() {

    const { currentUser } = useContext(UserContext);

    return (
        <div className="current-user-avatar" >
            <UserAvatar img={currentUser?.google_photo} />

        </div>
    );
}

export default CurrentUserAvatar;