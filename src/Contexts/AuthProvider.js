import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, sendPasswordResetEmail, GithubAuthProvider } from 'firebase/auth'


export const AuthContext = createContext();

const auth = getAuth(app)
//google auth provider
const googleProvider = new GoogleAuthProvider()
//github auth provider
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] =useState(null)

    //   create email or password or update details---
    const createUsers = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const updateDetails = (userName, updatephoto) => {
        return updateProfile(auth.currentUser, {
            displayName: userName, photoURL: updatephoto
        })
    }
    //emailverifi
    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser);
    }

    //Log out part
    const logOutPart = () =>{
        return signOut(auth)
    }
    //login part sing In
    const userSingInWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // google auto login--
    const googleAutoLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    //Github auto login
    const gitHubAutoLogIn = () => {
        return signInWithPopup(auth, githubProvider)
    }


    const authInfo = { createUsers, updateDetails, emailVerification, googleAutoLogIn, userSingInWithEmailPassword, gitHubAutoLogIn, user, logOutPart }


    //user ke lode korar jonno
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, user =>{
            setUser(user);

        })
        return () => {
            unSubscribe()
        }
    } , [])


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>);
};

export default AuthProvider;