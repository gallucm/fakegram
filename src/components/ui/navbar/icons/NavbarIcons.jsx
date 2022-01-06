import { useState } from 'react';
import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';

import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';


import classes from './NavbarIcons.module.css';
import { NavbarButtonAddPhoto } from '../buttons/addPhoto/NavbarButtonAddPhoto';

export const NavbarIcons = ({user}) => {

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
            <NavbarButtonAddPhoto user={user} />
            {
                favoriteDark
                    ? <FavoriteIcon className={classes.icon} titleAccess="Notificaciones" onMouseLeave={() => setFavoriteDark(false)} />
                    : <FavoriteBorderIcon className={classes.icon} titleAccess="Notificaciones" onMouseOver={() => setFavoriteDark(true)} />
            }
        </div>
    )
}
