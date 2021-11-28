import React from 'react'
import { MainNavigation } from './MainNavigation'

export const Navbar = (props) => {
    return (
        <>
           <MainNavigation/>
           <main>{props.children}</main> 
        </>
    )
}
