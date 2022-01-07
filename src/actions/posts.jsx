import { deletePostById, getCommentsByPost, saveComment, savePost, uploadImagePost } from "../services/firebase/posts";
import { profileActions } from "../store/profile-slice";

export const createPost = async (post) => {
    const data = await uploadImagePost(post.file);

    if (data) {
        try {
            await savePost(post.description, data, post.user);            
        } catch (error) {
            throw error;
        }
    }
    return null;
}

export const deletePost = async (pid, imageName) => {
    return async (dispatch) => {
        try {
            const deleted = await deletePostById(pid, imageName);

            if (deleted) {
            }

        } catch (error) {
            throw error;
        }

    }
}

export const addComment = (comment, reset) => {
    return async (dispatch) => {
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
}

export const getPostComments = (pid, setLoaded) => {
    return async (dispatch) => {
        try {
            const comments = await getCommentsByPost(pid);

            if (comments) {
                dispatch(profileActions.setComments(comments));
            }

        } catch (error) {
            throw error;
        } finally {
            setLoaded(true);
        }
    }
}