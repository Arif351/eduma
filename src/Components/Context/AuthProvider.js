import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../FireBase/firebase.init.js'


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (presentUser) => {
            setUser(presentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const LoginProvider = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const newUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const profileData = (profile) => {
        return updateProfile(auth.presentUser, profile);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = { user, LoginProvider, logout, newUser, signIn, loading, profileData }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;