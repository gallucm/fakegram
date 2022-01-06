import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import classes from './LinksSection.module.css'

export const LinksSection = () => {

    const location = useLocation();

    const isLogin = location.pathname === '/login';


    return (
        <section className={classes.links_section}>
            {
                isLogin ? 
                <>
                    <span>¿No tienes una cuenta?</span> <Link to="/register">Regístrate</Link>
                </> 
                :
                <>
                    <span>¿Tienes una cuenta?</span> <Link to="/login">Entrar</Link>
                </> 
            } 
        </section>
    )
}
