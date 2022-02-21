import { getProfile, getProfileById, updateProfileById, uploadImageProfile } from "../services/firebase/profile"
import { authActions } from "../store/auth-slice";
import { uiActions } from "../store/ui-slice";

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

export const updateUserProfile = (userId, profile) => {
    return async (dispatch) => {
        try{
            dispatch(uiActions.setLoading(true));
            const updated = await updateProfileById(userId, profile);
    
            if (updated) {
                dispatch(authActions.updateUserProfile(profile));
                dispatch(uiActions.setMessage('Perfil actualizado correctamente.'));
                dispatch(cleanMessage());
            }
        } catch (ex){
            dispatch(uiActions.setError('Ha ocurrido un error al actualizar el perfil.')); 
        } finally {
            dispatch(uiActions.setLoading(false));
        }
    }
}

export const updateImage = async (username, image) => {
    const urlUpdated = await uploadImageProfile(username, image);

    if (urlUpdated) {
        return urlUpdated;
    }

    return null;
}

const cleanMessage = () => {
    return async (dispatch) => {
        setTimeout(() => {
            dispatch(uiActions.setMessage(''));
        }, 1200);
    }
}