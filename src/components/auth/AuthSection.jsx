import { Link, useLocation } from 'react-router-dom';
import classes from './AuthSection.module.css';

export const AuthSection = () => {

    const location = useLocation();

    const isLogin = location.pathname === '/login';

    const submitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <section className={classes.auth_section}>
            <h1>Fakegram</h1>
            <form className={classes.auth_section__form} onSubmit={submitHandler}>
                <input type="email" id="email" placeholder="Correo electrónico" className={classes.auth_section__form__user_input} autoComplete="off" required />
                {
                    !isLogin && (
                        <>
                            <input type="text" id="name" placeholder="Nombre completo" className={classes.auth_section__form__user_input} autoComplete="off" required />
                            <input type="text" id="username" placeholder="Nombre de usuario" className={classes.auth_section__form__user_input} autoComplete="off" required />
                        </>
                    )
                }
                <input type="password" id="password" placeholder="Contraseña" className={classes.auth_section__form__password_input} autoComplete="off" required />
                <button type="submit" className={classes.auth_section__form__button_submit}> {isLogin ? 'Iniciar sesión' : 'Registrarte'} </button>
            </form>
            <div className={classes.auth_section__separator}>
                {
                    isLogin && (
                        <>
                            <div className={classes.auth_section__separator_line}></div>
                            <Link to="/accounts/password/reset">¿ Has olvidado la contraseña ?</Link>
                        </>
                    )
                }
            </div>
        </section>
    )
}
