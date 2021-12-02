// import { set, ref } from "firebase/database";
import { auth, db } from "./config";
import * as firebaseAuth from "firebase/auth";

import { set, ref } from "firebase/database";


//firebaseAuth.onAuthStateChanged

export const signUp = async (email, password, username, fullname) => {
    let success = false;

    try {
        const response = await firebaseAuth.createUserWithEmailAndPassword(auth, email, password);

        const writeSuccess = await writeUserData(response.user.uid, email, username, fullname);

        if (writeSuccess)
            success = true;
    } catch (error) {
        throw new Error(error);
    }

    return success;
}

export const signIn = async (email, password) => {
    const response = await firebaseAuth.signInWithEmailAndPassword(auth, email, password);
    return response;
}

const writeUserData = async (uid, email, username, fullname) => {
    let success = false;

    try {
        await set(ref(db, `users/${uid}`), {
            uid,
            name: fullname,
            username,
            email
        });

        success = true;
    } catch (error) {
        throw new Error(error);
    }

    return success;
}



// export const writeUserData = async (data) => {
//     let userWrite = false;

//     try{
//         await set(ref(db, `users/${data.uid}`), {
//             uid : data.uid,
//             name : data.name,
//             username : data.username,
//             email : data.email
//         });

//         userWrite = true;
//     } catch (error) {
//         throw new Error(error.message);
//     }

//     return userWrite;
// }