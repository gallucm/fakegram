import { Link, useLocation } from "react-router-dom";

import classes from "./LinkSection.module.css";

export const LinkSection = () => {

    const location = useLocation();

    const isLogin = location.pathname === '/login';

    return (
        <div className={classes.separator}>
            {
                isLogin && (
                    <>
                        <div className={classes.separator_line}></div>
                        <Link to="/accounts/password/reset">¿ Has olvidado la contraseña ?</Link>
                    </>
                )
            }
        </div>
    )
}
