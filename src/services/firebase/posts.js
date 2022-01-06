
import { getDate } from "../utils";
import { nApp } from "./config";

export const uploadImagePost = async (image) => {
    const name = 'pic_' + Date.now();
    const storageRef = nApp.storage().ref();
    const filePathRef = storageRef.child('images/posts/' + name);

    const snapshot = await filePathRef.put(image);

    const url = await snapshot.ref.getDownloadURL();

    return {url, name};
}

export const savePost = async (description, image, user) => {
    let done;

    const post = {
        description: description,
        image: image.url,
        imageName: image.name,
        ...user,
        createdAt: getDate(),
    };

    const postsRef = nApp.database().ref('posts');
    const newPostRef = postsRef.push();
    const newPostId = newPostRef.key;

    const updates = {};
    updates['/posts/' + newPostId ]= post;

    try{
        await nApp.database().ref().update(updates);
        done = true;
    } catch(error) {
        throw error;
    }

    return done;
}

export const getPostsByUser = async (user) => {

    const posts = [];

    const postsRef = nApp.database().ref('posts');

    await postsRef.orderByChild('uid').equalTo(user).once('value', (snapshot) => {
        snapshot.forEach((child) => {
            console.log(child);
            posts.push(child.val());
        });
    });

    return posts;
}

export const deleteImageName = async (imageName) => {
    const storageRef = nApp.storage().ref();
    const filePathRef = storageRef.child('images/posts/' + imageName);

    await filePathRef.delete();
}