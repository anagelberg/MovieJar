import './UserAvatar.scss';

function UserAvatar({ img }) {
    return (
        <div className='avatar'>
            {img && <img src={img} alt="user avatar image" className='avatar__img' />}
        </div>
    )
}

export default UserAvatar;