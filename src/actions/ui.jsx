import { uiActions } from "../store/ui-slice"

export const resetUi = () => {
    return async (dispatch) => {
        dispatch(uiActions.resetAll());
    }
}
