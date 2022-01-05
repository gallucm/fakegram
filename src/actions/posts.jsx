import { savePost, uploadImagePost } from "../services/firebase/posts";

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
