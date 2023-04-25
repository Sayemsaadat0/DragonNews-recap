import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import firebaseApp from '../Firebase/Firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(firebaseApp)


const AuthProvider = ({ children }) => {
    const user = null
    const authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;