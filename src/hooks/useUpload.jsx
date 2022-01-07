import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { usePosts } from "./usePosts"

export const useUpload = () => {
    const dispatch = useDispatch();

    const { getPosts, createPost } = usePosts();

    const handleUpload = async (file, description, user) => {
        try {
            dispatch(uiActions.setLoading(true));

            const post = {
                file,
                description,
                user
            }
            
            await createPost(post);
            await getPosts(user.uid);
        } catch (error) {
            throw error;
        } finally {
            dispatch(uiActions.setLoading(false));
        }
    }

    return {
        handleUpload
    }
}
