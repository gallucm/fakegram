// import { set, ref } from "firebase/database";
import { auth, db, nApp } from "./config";
import * as firebaseAuth from "firebase/auth";

import { set, ref } from "firebase/database";
import { getProfileById } from "./profile";


//firebaseAuth.onAuthStateChanged

export const signUp = async (email, password, username, fullname) => {
    let success = false;

    try {
        const response = await firebaseAuth.createUserWithEmailAndPassword(auth, email, password);

        const writeSuccess = await writeUserData(response.user.uid, email, username, fullname);

        if (writeSuccess)
            success = true;
    } catch (error) {
        throw new Error(error.message);
    }

    return success;
}

export const signIn = async (email, password) => {
    try{
        const response = await firebaseAuth.signInWithEmailAndPassword(auth, email, password);

        const profileData = await getProfileById(response.user.uid);

        return {
            uid: response.user.uid,
            token: response.user.accessToken,
            userData: profileData
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getUserData = async (uid) => {
    let userData = null;

    try {
        const userRef = nApp.database().ref('users/' + uid);

        userData = await userRef.once('value');

        userData = userData.val();
        
    } catch (error) {
        throw new Error(error.message);
    }

    return userData;
}

const writeUserData = async (uid, email, username, fullname) => {
    let success = false;

    try {
        await set(ref(db, `users/${uid}`), {
            email,
            imageProfile: "",
            description: "",
            name: fullname,
            uid,
            username,

        });

        success = true;
    } catch (error) {
        throw new Error(error.message);
    }

    return success;
}