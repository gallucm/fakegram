import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { loginUser, registerUser } from '../../actions/auth';
import classes from './AuthSection.module.css';

export const AuthSection = () => {

    const dispatch = useDispatch();

    const { message, error, loading, reset } = useSelector(state => state.ui);

    const nameInputRef = useRef('');
    const usernameInputRef = useRef('');
    const emailInputRef = useRef('');
    const passwordInputRef = useRef('');

    const location = useLocation();

    const isLogin = location.pathname === '/login';

    useEffect(() => {
        if (reset){
            clearInputs();
        }
    }, [reset]);

    const clearInputs = () => {
        nameInputRef.current.value = '';
        usernameInputRef.current.value = '';
        emailInputRef.current.value = '';
        passwordInputRef.current.value = '';
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        const name = nameInputRef.current.value;
        const username = usernameInputRef.current.value;
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;

        if (isLogin) {
            dispatch(loginUser({ email, password }));
        } else {
            dispatch(registerUser({ email, password, name, username }));
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
            {
                loading && <h3>Loading...</h3>
            }
            {
                !loading && message && <div>{message}</div>
            }
            {
                !loading && error && <div>{error}</div>
            }
        </section>
    )
}
