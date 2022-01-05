import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';

import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';

import classes from './NavbarIcons.module.css';
import { NavbarButtonAddPhoto } from './NavbarButtonAddPhoto';
import { useState } from 'react';

export const NavbarIcons = () => {

    const [homeDark, setHomeDark] = useState(false);
    const [msgDark, setMsgDark] = useState(false);
    const [favoriteDark, setFavoriteDark] = useState(false);

    return (
        <div className={classes.icons}>
            <Link to="/" className={classes.link_default}>
                {
                    homeDark
                        ? <HomeIcon className={classes.icon} titleAccess="Inicio" onMouseLeave={() => setHomeDark(false)} />
                        : <HomeOutlinedIcon className={classes.icon} titleAccess="Inicio" onMouseOver={() => setHomeDark(true)} />
                }
            </Link>
            <Link to="/messages" className={classes.link_default}>
                {
                    msgDark
                        ? <MapsUgcIcon className={classes.icon} titleAccess="Mensajes" onMouseLeave={() => setMsgDark(false)} />
                        : <MapsUgcOutlinedIcon className={classes.icon} titleAccess="Mensajes" onMouseOver={() => setMsgDark(true)} />
                }
            </Link>
            <NavbarButtonAddPhoto />
            {
                favoriteDark
                    ? <FavoriteIcon className={classes.icon} titleAccess="Notificaciones" onMouseLeave={() => setFavoriteDark(false)} />
                    : <FavoriteBorderIcon className={classes.icon} titleAccess="Notificaciones" onMouseOver={() => setFavoriteDark(true)} />
            }
        </div>
    )
}
