
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import classes from './AccountSection.module.css';
import { EditSection } from './edit/EditSection';
import { PasswordSection } from './pwd/PasswordSection';

export const AccountSection = ({ userProp }) => {
  const location = useLocation();

  const path = location.pathname;

  const detailsLink = "/account/edit/";
  const passwordLink = "/account/password/change/";

  return (
    <>
      <div className={classes.container}>

        <div className={classes.options}>
          <ul>
              <NavLink to={detailsLink} activeClassName={classes.active} className={classes.link}>Editar Perfil</NavLink>
              <NavLink to={passwordLink} activeClassName={classes.active} className={classes.link}>Cambiar Contraseña</NavLink>
          </ul>
        </div>

        <div className={classes.content}>
          {path === detailsLink && <EditSection user={userProp} />}

          {path === passwordLink && <PasswordSection />}
        </div>
      </div>
        
    </>
  )
}
