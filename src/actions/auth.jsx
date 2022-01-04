import { signIn, signUp } from "../services/firebase/auth";
import { authActions } from "../store/auth-slice";
import { uiActions } from "../store/ui-slice";

export const registerUser = (user) => {
    return async (dispatch) => {
        try {
            dispatch(uiActions.setLoading(true));

            const { email, password, username, name } = user;

            const success = await signUp(email, password, username, name);

            if (success) {
                dispatch(uiActions.setMessage('Usuario creado correctamente'));
                dispatch(uiActions.reset());
            }
        } catch (error) {
            dispatch(uiActions.setError('Error: ' + error.message));
        } finally {
            dispatch(uiActions.setLoading(false));
        }
    }
}

export const loginUser = (user) => {
    return async (dispatch) => {
        try {
            dispatch(uiActions.setLoading(true));

            const { email, password } = user;

            const response = await signIn(email, password);

            if (response)
                dispatch(authActions.login(response));            
        } catch (error) {
            dispatch(setMessageError(error.message));
        } finally {
            dispatch(uiActions.setLoading(false));
        }
    }
}

const setMessageError = (error) => {
    return async (dispatch) => {
        if (error.includes('user-not') || error.includes('wrong')) 
            dispatch(uiActions.setError('Usuario o contraseña incorrecta'));
        else if (error.includes('disabled'))
            dispatch(uiActions.setError('La cuenta ha sido temporalmente deshabilitada por haber realizado demasiados intentos incorrectos, contacte con el administrador'));
        else
            dispatch(uiActions.setError(error));
    }
}