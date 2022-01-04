import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';

import classes from './NavbarIcons.module.css';

export const NavbarIcons = () => {

    // const dispatch = useDispatch();

    // const [imageLoad, setImageLoad] = useState(false);

    // const showOptionsMenuHandler = () => {
    //     const optionsDiv = document.querySelector(`.${classes.options}`);
    //     optionsDiv.classList.toggle(classes.show);
    // }

    // const handleImageLoad = () => {
    //     setImageLoad(true);
    // }

    // const handleLogoutClick = () => {
    //     dispatch(authActions.logout());
    //     dispatch(profileActions.removeUser());
    // }



    // const hideOptionsMenuHandler = () => {
    //     const optionsDiv = document.querySelector(`.${classes.options}`);
    //     optionsDiv.classList.toggle(classes.hide);
    // }

    return (
            <div className={classes.icons}>
                <Link to="/" className={classes.link_default}>
                    <HomeOutlinedIcon className={classes.icon} titleAccess="Inicio" />
                </Link>
                <Link to="/messages" className={classes.link_default}>
                    <MapsUgcOutlinedIcon className={classes.icon} titleAccess="Mensajes" />
                </Link>
                <FavoriteBorderIcon className={classes.icon} titleAccess="Notificaciones" />
                
            {/* <div className={classes.options}>
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
            </div> */}
            </div>
    )
}
