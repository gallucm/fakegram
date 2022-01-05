import { uploadImagePost } from "../services/firebase/posts";

export const uploadImage = async (file) => {
    const url = await uploadImagePost(file);

    if (url) {
        return url;
    }

    return null;
}