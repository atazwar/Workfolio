import React, { useEffect, useState } from "react"
import app from "./config/firebase.js"

//Allows for propogation of data throughout component tree.
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
        console.log(currentUser);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};


