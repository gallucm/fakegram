import classes from './AuthSection.module.css';

export const AuthSection = () => {
    return (
        <section className={classes.auth_section}>
            <form className={classes.auth_section__form}>
                <input type="text" id="username" placeholder="Nombre de usuario" className={classes.auth_section__form__user_input} autoComplete="off"/>
            </form>
        </section>
    )
}
