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


export const uploadImageProfile = async (userId, image) => {

    const storageRef = nApp.storage().ref();
    const filePath = storageRef.child('images/profile/' + image.name);

    filePath.put(image).on('state_changed', function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
            case firebase.storage.TaskState.SUCCESS: // or 'running'
                console.log('Upload is running');
                break;
            default:
                
        }
    }, function (error) {
    }, async function () {
        const fileUrlDownlad = await filePath.getDownloadURL();
        updateImageProfile(userId, fileUrlDownlad);
    });
}

const updateImageProfile = async (userId, url) => {
    var updates = {};

    updates['/users/' + userId + '/imageProfile'] = url;
    await firebase.database().ref().update(updates);
}