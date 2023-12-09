import './UserAvatar.scss';

function UserAvatar({ img, ...attributes }) {
    return (
        <div className='avatar' {...attributes}>
            {img && <img src={img} alt="user avatar image" className='avatar__img' />}
        </div>
    )
}

export default UserAvatar;