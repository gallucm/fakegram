// import * as firebaseAuth from "firebase/auth";

import { get, ref } from "@firebase/database"

import firebase from "firebase/compat/app";
import { db, nApp } from "./config";

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

export const getProfileById = async (userId) => {
    const userRef = firebase.database().ref('/users/' + userId);

    const user = await (await userRef.get()).val();

    return user;
}

export const uploadImageProfile = async (userId, image) => {
    const storageRef = nApp.storage().ref();
    const filePathRef = storageRef.child('images/profile/' + image.name);

    const snapshot = await filePathRef.put(image);

    const downloadURL = await snapshot.ref.getDownloadURL();

    const imageUpdated = await updateImageProfile(userId, downloadURL);
   
    if (imageUpdated) {
        return downloadURL;
    } else {
        return null;
    }
}

const updateImageProfile = async (userId, url) => {
    var updates = {};
    let isOk = false;

    try{
        updates['/users/' + userId + '/imageProfile'] = url;
        await firebase.database().ref().update(updates);
        isOk = true;
    } catch(error) {
        throw new Error(error.message);
    } finally{
        return isOk;
    }
}