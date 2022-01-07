import { useDispatch } from "react-redux";
import { deletePostById, getCommentsByPost, getPostsByUser, uploadImagePost, savePost, saveComment } from "../services/firebase/posts";
import { uiActions } from "../store/ui-slice";
import { profileActions } from "../store/profile-slice";
import { useState } from "react";

export const usePosts = () => {
    const dispatch = useDispatch();

    const [commentsLoaded, setCommentsLoaded] = useState(false);

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

    const getPostComments = async (pid) => {
        try {
            const comments = await getCommentsByPost(pid);

            if (comments) {
                dispatch(profileActions.setComments(comments));
            }

        } catch (error) {
            throw error;
        } finally {
            setCommentsLoaded(true);
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

    const addComment = async (comment, reset) => {
        try {
            const ok = await saveComment(comment);

            if (ok) {
                dispatch(profileActions.addComment(comment));
            }
        } catch (error) {
            throw error;
        } finally {
            reset();
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
        commentsLoaded,
        getPosts,
        getPostComments,
        deletePost,
        createPost,
        addComment,
        setSelectedPost
    }
}
