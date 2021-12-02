import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { AuthSection } from '../components/auth/AuthSection'
import { LinksSection } from '../components/auth/LinksSection'
import { uiActions } from '../store/ui-slice';

export const AuthPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(uiActions.resetAll());
    }, [dispatch]);

    return (
        <>
            <AuthSection/>
            <LinksSection/>
        </>
    )
}
