import { getLoginData } from "../services/utils";

import * as firebaseAuth from "firebase/auth";
import { auth } from "../services/firebase/config";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { useState } from "react";

export const useLogin = () => {

    const dispatch = useDispatch();

    const [loadUse, setLoadUse] = useState(true);

    const checkIfLogged = () => {
        const userStorage = getLoginData();

        if (userStorage) {
            firebaseAuth.onAuthStateChanged(auth, (user) => {
                
                const accessToken = user.accessToken;
                const isExpired = user.stsTokenManager.isExpired;

                const truthy = (accessToken === userStorage.token && !isExpired);

                if (truthy) {
                    dispatch(authActions.login(userStorage));
                    setLoadUse(false);
                } else {
                    dispatch(authActions.logout());
                    setLoadUse(false);
                }
            });
        } else {
            dispatch(authActions.logout());
            setLoadUse(false);
        }
    }
    
    return [
        loadUse,
        checkIfLogged
    ]
}
