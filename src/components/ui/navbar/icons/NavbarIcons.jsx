import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';

import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';

import { NavbarButtonAddPhoto } from '../buttons/addPhoto/NavbarButtonAddPhoto';

import classes from './NavbarIcons.module.css';

export const NavbarIcons = ({ user, option }) => {

    return (
        <div className={classes.icons}>
            <Link to="/" className={classes.link_default}>
                {
                    (option === 'home')
                        ? <HomeIcon className={classes.icon} titleAccess="Inicio" />
                        : <HomeOutlinedIcon className={classes.icon} titleAccess="Inicio" />
                }
            </Link>
            <Link to="/messages" className={classes.link_default}>
                {
                    (option === 'msg')
                        ? <MapsUgcIcon className={classes.icon} titleAccess="Mensajes" />
                        : <MapsUgcOutlinedIcon className={classes.icon} titleAccess="Mensajes" />
                }
            </Link>
            <NavbarButtonAddPhoto user={user} />
            <FavoriteBorderIcon className={classes.icon} titleAccess="Notificaciones" />
        </div>
    )
}
