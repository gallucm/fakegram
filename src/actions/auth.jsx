import { signIn, signUp } from "../services/firebase/api"
import { uiActions } from "../store/ui-slice";

export const registerUser = (user) => {
    return async (dispatch) => {
        try {
            dispatch(uiActions.setLoading(true));

            const success = await signUp(user.email, user.password, user.username, user.name);

            if (success)
                dispatch(uiActions.setMessage('Usuario creado correctamente'));
        } catch (error) {
            console.log(error.message);
            dispatch(uiActions.setMessage('Error: ' + error.message));
        } finally {
            dispatch(uiActions.setLoading(false));
        }
    }
}

export const loginUser = (user) => {
    return async (dispatch) => {
        try {
            dispatch(uiActions.setLoading(true));

            const success = await signIn(user.email, user.password);

            if (success)
                dispatch(uiActions.setMessage('Usuario logueado correctamente'));
        } catch (error) {
            console.log(error.message);
            dispatch(uiActions.setMessage('Error: ' + error.message));
        } finally {
            dispatch(uiActions.setLoading(false));
        }
    }
}