import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { uiActions } from '../store/ui-slice';

import { AuthSection } from '../components/auth/section/auth/AuthSection';
import { LinksSection } from '../components/auth/section/links/LinksSection';

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
