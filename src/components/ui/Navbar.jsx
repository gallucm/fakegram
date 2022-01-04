import React from 'react'
import { MainNavigation } from './MainNavigation'

export const Navbar = (props) => {

    const { imageProfile } = props;

     return (
        <>
           <MainNavigation imageProfile={imageProfile}/>
           <main>{props.children}</main> 
        </>
    )
}
