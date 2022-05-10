
import { nApp } from "./config";

export const uploadImagePost = async (image) => {
    const name = 'post_' + Date.now();
    const storageRef = nApp.storage().ref();
    const filePathRef = storageRef.child('images/posts/' + name);

    const snapshot = await filePathRef.put(image);

    const url = await snapshot.ref.getDownloadURL();

    return {url, name};
}

export const savePost = async (description, image, user) => {
    const object = {
        description: description,
        comments: [],
        createdAt: new Date(),
        imageName: image.name,
        imageUrl: image.url,
        uid: user.uid,
        userData: {
            ...user
        },
    };

    const postsRef = nApp.database().ref('posts');
    const newPostRef = postsRef.push();
    const newPostId = newPostRef.key;

    const updates = {};
    updates['/posts/' + newPostId ]= object;

    try{
        await nApp.database().ref().update(updates);
    } catch(error) {
        throw error;
    }

    return {
        pid: newPostId,
        ...object
    };
}

export const deletePostById = async (postId, postImageName) => {
    let done;

    try{
        await nApp.database().ref('posts/' + postId).remove();

        await deletePostImage(postImageName);
        
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
            let comments = [];

            if (child.val().comments) {
                comments = Object.keys(child.val().comments).map(key => {
                    return {
                        cid: key,
                        ...child.val().comments[key]
                    };    
                });
            }

            const { comments: OldComments, ...Other} = child.val();

            const post = {
                pid: child.key,
                comments,
                ...Other
            };

            posts.push(post);
        });
    });

    return posts;
}

const deletePostImage = async (imageName) => {
    const storageRef = nApp.storage().ref();
    const filePathRef = storageRef.child('images/posts/' + imageName);

    await filePathRef.delete();
}

export const addPostComment = async (pid, comment) => {
    let done;

    const commentsRef = nApp.database().ref('posts/' + pid + '/comments');

    const newCommentRef = commentsRef.push();

    const newCommentId = newCommentRef.key;

    const updates = {};

    updates['/posts/' + pid + '/comments/' + newCommentId] = comment;

    try{
        await nApp.database().ref().update(updates);
        done = true;
    } catch(error) {
        throw error;
    }

    return done;
}

export const deletePostComment = async (pid, cid) => {
    let done;

    try{
        await nApp.database().ref('posts/' + pid + '/comments/' + cid).remove();
        done = true;
    } catch(error) {
        throw error;
    }

    return done;
}