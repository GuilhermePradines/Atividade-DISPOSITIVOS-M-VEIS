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


export const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Usuário logado:", user);
      return user;
    } catch (error) {
      console.error("Erro ao fazer login:", error.code, error.message);
      throw new Error(error.message);
    }
  };
  

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