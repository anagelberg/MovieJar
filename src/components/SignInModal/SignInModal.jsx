import './SignInModal.scss';
import Button from '../Button/Button';
import GoogleIcon from '../../assets/icons/google.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';

function SignInModal({ show }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    //on mount, checks if the user is logged in 
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/auth/status`, { withCredentials: true })
            .then(response => {
                setIsAuthenticated(response.data.authenticated);
                setUser(response.data.user);
                console.log("response", response.data);

            })
            .catch(error => {
                console.error('Error fetching authentication status', error);
            });
    }, []);



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
                <a>View Demo</a>
            </div>
        </div>
    )
}

export default SignInModal;