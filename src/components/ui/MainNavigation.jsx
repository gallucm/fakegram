import React, { useRef } from 'react'

import classes from './MainNavigation.module.css';
import avatar from '../../assets/images/avatar.png';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export const MainNavigation = () => {
    const history = useHistory();

    const inputSearchRef = useRef();

    const handleSearchClick = () => {
        // const input = inputSearchRef.current.value;
    }

    const handleHomeClick = () => {
        history.push('/');
    }

    const handleLogoutClick = () => {
        history.replace('/login');
    }

    return (
        <header className={classes.header}>
            <h1 className={classes.logo} onClick={handleHomeClick}>Fakegram</h1>
            <input type="text" className={classes.input_search} ref={inputSearchRef} onKeyUp={handleSearchClick} />
            <div className={classes.dropdown}>
                <img src={avatar} alt="Avatar" className={classes.avatar} />
                <div className={classes.drowpdown__content}>
                    <div className={classes.link}>
                        <Link to="/p/1234">Perfil</Link>
                    </div>
                    <div className={classes.link}>
                        <Link to="/account">Ajustes</Link>
                    </div>
                    <div className={classes.link} onClick={handleLogoutClick}>
                        Salir
                    </div>
                </div>
            </div>
        </header>
    )
}
