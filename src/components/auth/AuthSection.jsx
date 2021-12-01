import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { signIn, signUp, writeUserData } from '../../services/firebase/api';
import { authActions } from '../../store/auth';
import classes from './AuthSection.module.css';

export const AuthSection = () => {

    const dispatch = useDispatch();

    const nameInputRef = useRef('');
    const usernameInputRef = useRef('');
    const emailInputRef = useRef('');
    const passwordInputRef = useRef('');

    const location = useLocation();

    const isLogin = location.pathname === '/login';

    const submitHandler = async (event) => {
        event.preventDefault();

        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;

        if (isLogin){
            
        } else {
            const name = nameInputRef.current.value;
            const username = usernameInputRef.current.value;

        }
        
    }

    return (
        <section className={classes.auth_section}>
            <h1>Fakegram</h1>
            <form className={classes.auth_section__form} onSubmit={submitHandler}>
                <input type="email" id="email" placeholder="Correo electrónico" ref={emailInputRef} className={classes.auth_section__form__user_input} required />
                {
                    !isLogin && (
                        <>
                            <input type="text" id="name" placeholder="Nombre completo" ref={nameInputRef} className={classes.auth_section__form__user_input} autoComplete="off" required />
                            <input type="text" id="username" placeholder="Nombre de usuario" ref={usernameInputRef} className={classes.auth_section__form__user_input} autoComplete="off" required />
                        </>
                    )
                }
                <input type="password" id="password" placeholder="Contraseña" ref={passwordInputRef} className={classes.auth_section__form__password_input} autoComplete="off" required />
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
