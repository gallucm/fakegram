import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { set, ref } from "firebase/database";
import { auth, db } from "./config";



export const signUp = async (email, password) => {
    let uid;
    
    try{
        const response = await createUserWithEmailAndPassword(auth, email, password);    
        uid = response.user.uid;
    } catch (error) {
        throw new Error(error.message);
    }

    return uid;
}

export const signIn = async (email, password) => {
    let response;

    try{
        response = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        throw new Error(error.message);
    }

    return {
        token: response._tokenResponse.idToken,
        id: response.user.uid
    }
}


export const writeUserData = async (data) => {
    let userWrite = false;

    try{
        await set(ref(db, `users/${data.uid}`), {
            uid : data.uid,
            name : data.name,
            username : data.username,
            email : data.email
        });

        userWrite = true;
    } catch (error) {
        throw new Error(error.message);
    }

    return userWrite;
}