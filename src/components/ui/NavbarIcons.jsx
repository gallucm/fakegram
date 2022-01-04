import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';


import classes from './NavbarIcons.module.css';
import { NavbarButtonAddPhoto } from './NavbarButtonAddPhoto';

export const NavbarIcons = () => {
    return (
            <div className={classes.icons}>
                <Link to="/" className={classes.link_default}>
                    <HomeOutlinedIcon className={classes.icon} titleAccess="Inicio" />
                </Link>
                <Link to="/messages" className={classes.link_default}>
                    <MapsUgcOutlinedIcon className={classes.icon} titleAccess="Mensajes" />
                </Link>
                <NavbarButtonAddPhoto/>
                <FavoriteBorderIcon className={classes.icon} titleAccess="Notificaciones" />
            </div>
    )
}
