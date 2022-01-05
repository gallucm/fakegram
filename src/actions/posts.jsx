import { savePost, uploadImagePost } from "../services/firebase/posts";

export const createPost = async (file, description, user) => {
    let done;

    const imageUrl = await uploadImagePost(file);

    if (imageUrl) {
        try {
            await savePost(description, imageUrl, user);
            done = true;
        } catch (error) {
            console.log(error);
            done = false;
        }
    }

    return done;
}