import { useDispatch } from "react-redux";

import { deletePostById, getPostsByUser, uploadImagePost, savePost, addPostComment, deletePostComment } from "../services/firebase/posts";

import { uiActions } from "../store/ui-slice";
import { profileActions } from "../store/profile-slice";

export const usePosts = () => {
    const dispatch = useDispatch();

    const getPosts = async (user) => {
        try {
            dispatch(uiActions.setLoading(true));

            const posts = await getPostsByUser(user);

            dispatch(profileActions.setPosts(posts));
        } catch (error) {
            dispatch(uiActions.setError(error));
        } finally {
            dispatch(uiActions.setLoading(false));
        }
    }

    const createPost = async (post) => {
        const data = await uploadImagePost(post.file);

        if (data) {
            try {
                await savePost(post.description, data, post.user);
                getPosts(post.user.uid);
            } catch (error) {
                throw error;
            }
        }
    }

    const deletePost = async (pid, imageName) => {
        try {
            const deleted = await deletePostById(pid, imageName);

            if (deleted) {
                dispatch(profileActions.removePost(pid));
            }

        } catch (error) {
            throw error;
        }
    }

    const addComment = async (pid, comment, reset) => {
        try {
            const done = await addPostComment(pid, comment);

            if (done) {
                dispatch(profileActions.addComment(comment));
            }
        } catch (error) {
            throw error;
        } finally {
            reset();
        }
    }

    const deleteComment = async (pid, cid) => {
        try {
            const deleted = await deletePostComment(pid, cid);

            if (deleted) {
                dispatch(profileActions.removeComment(cid));
            }
        } catch (error) {
            throw error;
        }
    }

    const setSelectedPost = (post) => {
        try {
            dispatch(profileActions.setPostSelected(post));
        } catch (error) {
            throw error;
        }
    }

    return {
        getPosts,
        deletePost,
        createPost,
        addComment,
        deleteComment,
        setSelectedPost
    }
}
