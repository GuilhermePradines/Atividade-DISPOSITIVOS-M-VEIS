import {createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";



export const signUp = async (email, password) =>{
    // Create a new user with email and password
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            throw new Error(errorMessage);
        });
}


export const signIn = async (email, password)=> {
    // Sign in with email and password
    return auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigatory.navigate('Home');
            return user;
        })
        .catch((error) => {
            // An error happened.
            const errorCode = error.code;
            const errorMessage = error.message;
            throw new Error(errorMessage);
        });
}

export const logOut = async () => {
    // Sign out
    return auth.signOut()
        .then(() => {
            // Sign-out successful.
        })
        .catch((error) => {
            // An error happened.
            const errorCode = error.code;
            const errorMessage = error.message;
            throw new Error(errorMessage);
        });
}