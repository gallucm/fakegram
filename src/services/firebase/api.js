import { set, ref } from "firebase/database";
import { db } from "./config";

export const signUp = async (email, password) => {
    
}

export const signIn = async (email, password) => {
    
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