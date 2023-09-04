import './UserFeedback.scss';

function UserFeedback({ message }) {
    return (
        <div className="feedback-message">
            <p>
                {message}
            </p>
        </div>
    )
}

export default UserFeedback;