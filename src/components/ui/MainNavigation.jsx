import React from 'react'

import classes from './MainNavigation.module.css';
import avatar from '../../assets/images/avatar.png';

export const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>Fakegram</h1>
            <input type="text" className={classes.input_search}/>
            <img src={avatar} alt="Avatar" className={classes.avatar}/>
        </header>
    )
}
