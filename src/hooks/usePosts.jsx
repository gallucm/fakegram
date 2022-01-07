import { useDispatch } from "react-redux";
import { getCommentsByPost, getPostsByUser } from "../services/firebase/posts";
import { uiActions } from "../store/ui-slice";
import { profileActions } from "../store/profile-slice";
import { useState } from "react";

export const usePosts = () => {
    const dispatch = useDispatch();

    const [commentsLoaded, setCommentsLoaded] = useState(false);

    const getPosts = async (user) => {
        try{
            dispatch(uiActions.setLoading(true));
            
            const posts = await getPostsByUser(user);

            dispatch(profileActions.setPosts(posts));
        } catch (error) {
            dispatch(uiActions.setError(error));
        } finally {
            dispatch(uiActions.setLoading(false));
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

    return {
        getPosts,
        commentsLoaded,
        getPostComments
    }
}
