import { Link } from 'react-router-dom';
import classes from './AuthSection.module.css';

export const AuthSection = () => {
    return (
        <section className={classes.auth_section}>
            <h1>Fakegram</h1>
            <form className={classes.auth_section__form}>
                <input type="text" id="username" placeholder="Nombre de usuario" className={classes.auth_section__form__user_input} autoComplete="off" required />
                <input type="password" id="password" placeholder="Contraseña" className={classes.auth_section__form__password_input} autoComplete="off" required />
                <button type="submit" className={classes.auth_section__form__button_submit}> Iniciar sesión </button>
            </form>
            <div className={classes.auth_section__separator}>
                <div className={classes.auth_section__separator_line}></div>
                <Link to="/accounts/password/reset">¿ Has olvidado la contraseña ?</Link>
            </div>
        </section>
    )
}
