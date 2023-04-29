import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import firebaseApp from '../Firebase/Firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(firebaseApp)


const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null)
const [loader,setLoader] = useState(true) 

const createUser = (email, password) =>{
    setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinUser = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

  const logout = () =>{
    setLoader(true)
    return signOut(auth);
  } 

useEffect(()=>{
const unsub = onAuthStateChanged(auth,loggedUser =>{
    // console.log('sdjughfjkdhfdhf', loggedUser)
    setUser(loggedUser)
    setLoader(false)
})
return () =>{
    unsub()
}

},[])

 
    const authInfo = {
        user,
        createUser,
        signinUser,
        logout,
        loader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;