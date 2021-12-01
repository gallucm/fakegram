import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { signIn, signUp, writeUserData } from '../../services/firebase/api';
import classes from './AuthSection.module.css';

export const AuthSection = () => {

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
            const response = await signIn(email, password);
            if (response.id)
                localStorage.setItem('user', JSON.stringify(response));
        } else {
            const name = nameInputRef.current.value;
            const username = usernameInputRef.current.value;

            const uid = await signUp(email, password);
            const isAllOk = await writeUserData({
                 uid,
                 email,
                 name,
                 username
            });

            console.log(isAllOk);
        }
        
    }

    return (
        <section className={classes.auth_section}>
            <h1>Fakegram</h1>
            <form className={classes.auth_section__form} onSubmit={submitHandler}>
                <input type="email" id="email" placeholder="Correo electrónico" ref={emailInputRef} className={classes.auth_section__form__user_input} autoComplete="off" required />
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
