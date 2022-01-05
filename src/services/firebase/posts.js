
import { getDate } from "../utils";
import { nApp } from "./config";

export const uploadImagePost = async (image) => {
    const name = 'pic_' + Date.now();
    const storageRef = nApp.storage().ref();
    const filePathRef = storageRef.child('images/posts/' + name);

    const snapshot = await filePathRef.put(image);

    const downloadURL = await snapshot.ref.getDownloadURL();

    return downloadURL;
}

export const savePost = async (description, image, user) => {
    let done;

    const post = {
        description: description,
        image: image,
        ...user,
        createdAt: getDate(),
    };

    const postsRef = nApp.database().ref('posts');
    const newPostRef = postsRef.push();
    const newPostId = newPostRef.key;

    const updates = {};
    updates['/posts/' + newPostId] = post;

    try{
        await nApp.database().ref().update(updates);
        done = true;
    } catch(error) {
        console.log(error);
        done = false;
    }

    return done;
}

export const getPostsByUser = async (user) => {

    const posts = [];

    const postsRef = nApp.database().ref('posts');

    await postsRef.orderByChild('uid').equalTo(user).once('value', (snapshot) => {
        snapshot.forEach((child) => {
            posts.push(child.val());
        });
    });

    return posts;
}