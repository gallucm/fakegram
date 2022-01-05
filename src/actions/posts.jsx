import { savePost, uploadImagePost } from "../services/firebase/posts";

export const createPost = async (post) => {
    const imageUrl = uploadImagePost(post.file);

    if (imageUrl) {
        try {
            await savePost(post.description, imageUrl, post.user);
        } catch (error) {
            throw error;
        }
    }

}
