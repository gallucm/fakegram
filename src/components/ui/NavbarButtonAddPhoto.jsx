import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

import classes from './NavbarIcons.module.css';

export const NavbarButtonAddPhoto = () => {

    const handleOpenModal = () => {
        console.log('open modal')
    }
    return (
        <div>
            <AddPhotoAlternateOutlinedIcon className={classes.icon} titleAccess="Subir foto" onClick={handleOpenModal} />
        </div>
    )
}
