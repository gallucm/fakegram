import { usePosts } from "./usePosts"

export const useUpload = () => {
    const { createPost } = usePosts();

    const handleUpload = async (file, description, user) => {
        try {
            const post = {
                file,
                description,
                user
            }
            await createPost(post);
        } catch (error) {
            throw error;
        }
    }

    return {
        handleUpload
    }
}
