
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
        createdAt: new Date(),
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
            const post = {
                pid: child.key,
                ...child.val(),
            };

            posts.push(post);
        });
    });

    return posts;
}

export const deleteImageName = async (imageName) => {
    const storageRef = nApp.storage().ref();
    const filePathRef = storageRef.child('images/posts/' + imageName);

    await filePathRef.delete();
}

export const saveComment = async (comment) => {
    let done;

    const commentRef = nApp.database().ref('comments');
    const newCommentRef = commentRef.push();
    const newCommentId = newCommentRef.key;

    const updates = {};
    updates['/comments/' + newCommentId ]= comment;

    try{
        await nApp.database().ref().update(updates);
        done = true;
    } catch(error) {
        throw error;
    }

    return done;
}

export const getCommentsByPost = async (pid) => {
    const comments = [];

    const commentsRef = nApp.database().ref('comments');

    await commentsRef.orderByChild('pid').equalTo(pid).once('value', (snapshot) => {
        snapshot.forEach((child) => {
            const comment = {
                cid: child.key,
                ...child.val(),
            };

            comments.push(comment);
        });
    });

    return comments;
}