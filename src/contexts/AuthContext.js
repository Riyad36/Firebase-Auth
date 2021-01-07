import React, { useState, useEffect, iseContext, useContext } from 'react'
import {auth} from './../firebase'

const AuthContext = React.createContext();

const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = (props) => {

    const [currentUser, SetCurrentUser] = useState({});
    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);

    }

    const login = (email, password)=>{
        return auth.signInWithEmailAndPassword(email,password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) =>{
            SetCurrentUser(user)
        })
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{

            currentUser, signup, login

        }}>
            {props.children}
            </AuthContext.Provider>

    )

}

export {AuthProvider, useAuth}