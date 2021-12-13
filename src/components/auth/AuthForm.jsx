import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loginUser, registerUser } from '../../actions/auth';
import classes from './AuthForm.module.css';

export const AuthForm = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const isLogin = location.pathname === '/login';

    const { reset } = useSelector(state => state.ui);

    const nameInputRef = useRef('');
    const usernameInputRef = useRef('');
    const emailInputRef = useRef('');
    const passwordInputRef = useRef('');

    const clearInputs = () => {
        nameInputRef.current.value = '';
        usernameInputRef.current.value = '';
        emailInputRef.current.value = '';
        passwordInputRef.current.value = '';
    }

    useEffect(() => {
        if (reset && !isLogin) {
            if (nameInputRef.current.value !== '' && usernameInputRef.current.value !== '' && emailInputRef.current.value !== '' && passwordInputRef.current.value !== ''){
            clearInputs();
            }
        }
    }, [reset, isLogin]);

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
        <form className={classes.form_section} onSubmit={submitHandler}>
            <input type="email" id="email" placeholder="Correo electrónico" ref={emailInputRef} className={classes.user_input} required />
            {
                !isLogin && (
                    <>
                        <input type="text" id="name" placeholder="Nombre completo" ref={nameInputRef} className={classes.user_input} autoComplete="off" required />
                        <input type="text" id="username" placeholder="Nombre de usuario" ref={usernameInputRef} className={classes.user_input} autoComplete="off" required />
                    </>
                )
            }
            <input type="password" id="password" placeholder="Contraseña" ref={passwordInputRef} className={classes.password_input} autoComplete="off" required />
            <button type="submit" className={classes.btn_submit}> {isLogin ? 'Iniciar sesión' : 'Registrarte'} </button>
        </form>
    )
}
