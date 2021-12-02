import { signIn, signUp } from "../services/firebase/auth";
import { authActions } from "../store/auth-slice";
import { uiActions } from "../store/ui-slice";

export const registerUser = (user) => {
    return async (dispatch) => {
        try {
            dispatch(uiActions.setLoading(true));

            const success = await signUp(user.email, user.password, user.username, user.name);

            if (success){
                dispatch(uiActions.setMessage('Usuario creado correctamente'));
                dispatch(uiActions.reset());
            }
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

            const response = await signIn(user.email, user.password);

            if (response){
                dispatch(authActions.login(response));
                dispatch(uiActions.setMessage('Usuario logueado correctamente'));
            }
        } catch (error) {
            console.log(error.message);
            dispatch(uiActions.setMessage('Error: ' + error.message));
        } finally {
            dispatch(uiActions.setLoading(false));
        }
    }
}