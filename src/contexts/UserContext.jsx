import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => { },
    isAuthenticated: false,
    setIsAuthenticated: () => { }
});


export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const resetAuthentication = () => {
        setCurrentUser(null);
        setIsAuthenticated(false);
    };

    useEffect(() => {

        const interceptor = axios.interceptors.response.use(
            response => response,
            error => {
                if (error.response && error.response.status === 401) {
                    resetAuthentication();
                }
                return Promise.reject(error);
            }
        );

        axios.get(`${process.env.REACT_APP_BASE_URL}/auth/status`, { withCredentials: true })
            .then(response => {
                setIsAuthenticated(response.data.authenticated);
                setCurrentUser(response.data.user);

            })
            .catch(error => {
                console.error('Error fetching authentication status', error);
            });

        return () => {
            axios.interceptors.response.eject(interceptor);
        };
    }, []);

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, isAuthenticated, setIsAuthenticated }}>
            {children}
        </UserContext.Provider>
    );
};
