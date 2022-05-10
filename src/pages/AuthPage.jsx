import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { uiActions } from '../store/ui-slice';

import { AuthSection } from '../components/auth/section/auth/AuthSection';
import { LinksSection } from '../components/auth/section/links/LinksSection';

import classes from '../components/auth/section/auth/AuthSection.module.css';

export const AuthPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(uiActions.resetAll());
    }, [dispatch]);

    return (
        <div className={classes.center}>
            <AuthSection/>
            <LinksSection/>
        </div>
    )
}
