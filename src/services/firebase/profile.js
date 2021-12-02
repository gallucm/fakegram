// import * as firebaseAuth from "firebase/auth";

import { get, ref } from "@firebase/database"
import { db } from "./config"



export const getProfile = async (username) => {
    let value;

    const usersListRef = ref(db, 'users');
    const usersList = await get(usersListRef);
    usersList.forEach(user => {
        if (user.child('username').val() === username) {
            value = user.val();
        }
    });

    return value;
}