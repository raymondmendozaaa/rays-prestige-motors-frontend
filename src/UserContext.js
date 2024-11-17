import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [username, setUsername] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        console.log("Loaded username from localStorage:", storedUsername);
        if (storedUsername)
            setUsername(storedUsername);
        setLoading(false);
    }, []);

    return (
        <UserContext.Provider value= {{username, setUsername, loading}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);

// makes it so that I can access the username from other pages/components