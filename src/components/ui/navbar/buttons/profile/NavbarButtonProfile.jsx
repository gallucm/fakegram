import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { authActions } from '../../../../../store/auth-slice';
import { profileActions } from '../../../../../store/profile-slice';
import { Loading } from "../../../loading/Loading";

import classes from "./NavbarButtonProfile.module.css";

export const NavbarButtonProfile = ({ imageProfile, option }) => {
    const [imageLoad, setImageLoad] = useState(false);

    const dispatch = useDispatch();

    const handleImageLoad = () => {
        setImageLoad(true);
    }

    const handleLogoutClick = () => {
        dispatch(authActions.logout());
        dispatch(profileActions.removeUser());
    }

    return (

        <>
            <div className={classes.dropdown}>
                {
                    imageProfile &&
                    <img src={imageProfile} alt="Avatar" className={`${classes.avatar} ${option === 'profile' ? classes.border : ''}`} onLoad={handleImageLoad} style={imageLoad ? { display: 'inherit' } : { display: 'none' }} title="Menu" />
                }
                {
                    !imageLoad &&
                    <Loading size="small" />
                }
                <div className={classes.options}>
                    <div className={classes.link}>
                        <Link to="/gallucm">Perfil</Link>
                    </div>
                    <div className={classes.link}>
                        <Link to="/account/edit/">Configuración</Link>
                    </div>
                    <div className={classes.link} >
                        <Link to="/" onClick={handleLogoutClick}>Salir</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
