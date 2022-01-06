import { getCommentsByPost, saveComment, savePost, uploadImagePost } from "../services/firebase/posts";
import { postActions } from "../store/post-slice";

export const createPost = async (post) => {
    const data = await uploadImagePost(post.file);

    if (data) {
        try {
            await savePost(post.description, data, post.user);
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
                dispatch(postActions.addComment(comment));
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
                dispatch(postActions.setComments(comments));
            }

        } catch (error) {
            throw error;
        } finally {
            setLoaded(true);
        }
    }
}
