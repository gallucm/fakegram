import { getProfile } from "../services/firebase/profile"

export const searchProfile = async (search) => {
    const value = search.replace('/', '');
    const profile = await getProfile(value);

    if (profile) {
        return profile;
    }

    return null;
}