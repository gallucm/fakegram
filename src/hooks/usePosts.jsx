import { useDispatch } from "react-redux";
import { getPostsByUser } from "../services/firebase/posts";
import { uiActions } from "../store/ui-slice";
import { profileActions } from "../store/profile-slice";

export const usePosts = () => {
    const dispatch = useDispatch();

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

    return {
        getPosts
    }
}
