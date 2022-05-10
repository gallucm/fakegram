import { useState } from "react";
import { useDispatch } from "react-redux";

import * as firebaseAuth from "firebase/auth";

import { auth } from "../services/firebase/config";
import { getUserData } from "../services/firebase/auth";

import { getLoginData } from "../services/utils";
import { authActions } from "../store/auth-slice";

export const useLogin = () => {

    const dispatch = useDispatch();

    const [loadUse, setLoadUse] = useState(true);

    const checkIfLogged = () => {
        const userStorage = getLoginData();

        if (userStorage) {
            firebaseAuth.onAuthStateChanged(auth, async (user) => {
                const { accessToken } = user;
                const { stsTokenManager: { isExpired } } = user;

                const truthy = (accessToken === userStorage.token && !isExpired);

                if (truthy) {
                    const data = await getUserData(userStorage.uid);

                    const fullUser = {
                        ...userStorage,
                        userData: data
                    }
                    dispatch(authActions.login(fullUser)); //TODO: BUSCAR TODA LA INFO DEL USUARIO EN LA DB.
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
