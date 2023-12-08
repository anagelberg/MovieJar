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

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/auth/status`, { withCredentials: true })
            .then(response => {
                setIsAuthenticated(response.data.authenticated);
                setCurrentUser(response.data.user);
                console.log("response", response.data);

            })
            .catch(error => {
                console.error('Error fetching authentication status', error);
            });
    }, []);

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, isAuthenticated, setIsAuthenticated }}>
            {children}
        </UserContext.Provider>
    );
};
