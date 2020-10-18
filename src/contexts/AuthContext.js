import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true) //firebase initially checks for user authentication, and thats wat we are 'loading' initially

    //login to firebase auth
    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password) //must return, because its a promise
    }

    //signup to firebase auth
    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)       //setting the initial firebase loading to false once the user authentication is complete
            
        })
        return unsubscribe
    }, [])

 /*    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [input]) */

    const value = {
        currentUser, 
        login,
        signup 
        
    }


    return (
        <AuthContext.Provider value = {value}>
            {!loading && children} 
        </AuthContext.Provider>
    )
}
