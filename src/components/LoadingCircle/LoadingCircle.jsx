import './LoadingCircle.scss'; // Import the CSS file

const LoadingCircle = () => {
    return (
        <div className='loading'>
            <div className="loading__circle">
                <div className="loading__circle-inner"></div>
            </div>
        </div>

    );
};

export default LoadingCircle;