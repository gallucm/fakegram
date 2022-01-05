import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import classes from './NavbarIcons.module.css';
import { useState } from 'react';

export const NavbarButtonAddPhoto = () => {
    const [addPhotoDark, setAddPhotoDark] = useState(false);

    const handleOpenModal = () => {
        console.log('open modal')
    }
    return (
        <div>
           {
               addPhotoDark 
               ? <AddPhotoAlternateIcon className={classes.icon} titleAccess="Subir foto" onClick={handleOpenModal} onMouseLeave={() => {setAddPhotoDark(false)}}/>
               : <AddPhotoAlternateOutlinedIcon className={classes.icon} titleAccess="Subir foto" onClick={handleOpenModal} onMouseOver={() => {setAddPhotoDark(true)}}/>
           } 
        </div>
    )
}
