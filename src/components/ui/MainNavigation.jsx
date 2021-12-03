import React, { useRef } from 'react'

import classes from './MainNavigation.module.css';
import noProfile from '../../assets/images/thumb-profile.png';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import { profileActions } from '../../store/profile-slice';

export const MainNavigation = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const inputSearchRef = useRef();

    const handleSearchClick = () => {
        // const input = inputSearchRef.current.value;
    }

    const handleHomeClick = () => {
        history.push('/');
    }

    const handleLogoutClick = () => {
        dispatch(authActions.logout());
        dispatch(profileActions.removeUser());
    }

    const showOptionsMenuHandler = () => {
        const optionsMenu = document.querySelector(`.${classes.drowpdown__content}`);
        optionsMenu.classList.toggle(classes.show);
    }

    const hideOptionsMenuHandler = () => {
        const optionsMenu = document.querySelector(`.${classes.drowpdown__content}`);
        optionsMenu.classList.remove(classes.show);
    }

    return (
        <header className={classes.header}>
            <h1 className={classes.logo} onClick={handleHomeClick}>Fakegram</h1>
            <input type="text" className={classes.input_search} ref={inputSearchRef} placeholder="Busca" onKeyUp={handleSearchClick} />
            <div className={classes.dropdown}>
                <div className={classes.icons}>
                    <Link to="/" className={classes.link_default}>
                        <HomeOutlinedIcon className={classes.icon} titleAccess="Inicio"/>
                    </Link>
                    <Link to="/messages" className={classes.link_default}>
                        <MapsUgcOutlinedIcon className={classes.icon} titleAccess="Mensajes"/>
                    </Link>
                    <FavoriteBorderIcon className={classes.icon} titleAccess="Notificaciones"/>
                    <img src={noProfile} alt="Avatar" className={classes.avatar} onClick={showOptionsMenuHandler} title="Menu"/>
                </div>
                <div className={classes.drowpdown__content}>
                    <div className={classes.link}>
                        <Link to="/gallucm" onClick={hideOptionsMenuHandler}>Perfil</Link>
                    </div>
                    <div className={classes.link}>
                        <Link to="/account" onClick={hideOptionsMenuHandler}>Configuración</Link>
                    </div>
                    <div className={classes.link} onClick={handleLogoutClick}>
                        Salir
                    </div>
                </div>
            </div>
        </header>
    )
}
