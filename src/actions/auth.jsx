import { signUp } from "../services/firebase/api"
import { uiActions } from "../store/ui-slice";

export const registerUser = (user) => {
    return async (dispatch) => {
        try {
            const success = await signUp(user.email, user.password, user.username, user.name);

            if (success)
                dispatch(uiActions.setMessage('Usuario creado correctamente'));
        } catch (error) {
            console.log(error.message);
            dispatch(uiActions.setMessage('Error: ' + error.message));
        }
    }
}