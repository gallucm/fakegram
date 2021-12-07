import { getProfile, getProfileById, uploadImageProfile } from "../services/firebase/profile"

export const searchProfileById = async (search) => {
    const profile = await getProfileById(search);

    if (profile){
        return profile;
    }

    return null;
}

export const searchProfile = async (search) => {
    const value = search.replace('/', '');
    const profile = await getProfile(value);

    if (profile) {
        return profile;
    }

    return null;
}

export const updateImage = async (username, image) => {
    const urlUpdated = await uploadImageProfile(username, image);

    if (urlUpdated) {
        return urlUpdated;
    }

    return null;
}