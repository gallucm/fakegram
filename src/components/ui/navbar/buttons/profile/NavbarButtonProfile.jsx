import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../../../actions/auth";

import { Loading } from "../../../loading/Loading";

import classes from "./NavbarButtonProfile.module.css";

export const NavbarButtonProfile = ({ user, option }) => {
    const [imageLoad, setImageLoad] = useState(false);

    const dispatch = useDispatch();

    const handleImageLoad = () => {
        setImageLoad(true);
    }

    const handleLogoutClick = () => {
        dispatch(logout());
    }

    return (
        <>
            <div className={classes.dropdown}>
                {
                    user.imageProfile &&
                    <img src={user.imageProfile} alt="Avatar" className={`${classes.avatar} ${option === 'profile' ? classes.border : ''}`} onLoad={handleImageLoad} style={imageLoad ? { display: 'inherit' } : { display: 'none' }} title="Menu" />
                }
                {
                    !imageLoad &&
                    <Loading size="small" />
                }
                <div className={classes.options}>
                    <div className={classes.link}>
                        <Link to={`/${user.username}`}>Perfil</Link>
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
