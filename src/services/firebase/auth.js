// import { set, ref } from "firebase/database";
import { auth, db } from "./config";
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

        const { uid, ...userData } = profileData;

        return {
            uid: response.user.uid,
            token: response.user.accessToken,
            userData
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

const writeUserData = async (uid, email, username, fullname) => {
    let success = false;

    try {
        await set(ref(db, `users/${uid}`), {
            email,
            imageProfile: "",
            info: {
                description: "",
                follows: 0,
                followers: 0
            },
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