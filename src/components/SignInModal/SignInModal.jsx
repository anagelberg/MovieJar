import './SignInModal.scss';
import GoogleIcon from '../../assets/icons/google.svg';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';

function SignInModal({ }) {

    const { isAuthenticated } = useContext(UserContext);


    // If user is logged in, don't display modal
    if (isAuthenticated) return null;

    return (
        <div className='sign-in'>
            <div className="sign-in__content">
                <h2>Welcome to MovieJar!</h2>

                <a className="sign-in__google" href={`${process.env.REACT_APP_BASE_URL}/auth/google`}>
                    <img src={GoogleIcon} alt="google icon" className='sign-in__google-icon' />
                    Continue with Google
                </a>
                <p>- or -</p>
                <a className='sign-in__demo-link' href="https://demo.moviejar.ca">View Demo</a>
            </div>
        </div>
    )
}

export default SignInModal;