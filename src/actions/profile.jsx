import { getProfile, uploadImageProfile } from "../services/firebase/profile"

export const searchProfile = async (search) => {
    const value = search.replace('/', '');
    const profile = await getProfile(value);

    if (profile) {
        return profile;
    }

    return null;
}

export const updateImage = async (username, image) => {
    const isUpdated = await uploadImageProfile(username, image);
    console.log('result', isUpdated);
}