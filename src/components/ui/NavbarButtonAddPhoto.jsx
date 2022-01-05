import { useState } from 'react';

import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import { ModalUpload } from './ModalUpload';

import classes from './NavbarIcons.module.css';
import { uploadImage } from '../../actions/posts';

export const NavbarButtonAddPhoto = () => {
    const [addPhotoDark, setAddPhotoDark] = useState(false);

    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const handleUploadFile = async(file) => {
        await uploadImage(file);
        handleClose();
    }

    return (
        <div>
            <ModalUpload open={openModal} onCloseModal={handleClose} onUploadFile={handleUploadFile}/>
            
            {
                addPhotoDark
                    ? <AddPhotoAlternateIcon className={classes.icon} titleAccess="Subir foto" onClick={handleOpen} onMouseLeave={() => { setAddPhotoDark(false) }} />
                    : <AddPhotoAlternateOutlinedIcon className={classes.icon} titleAccess="Subir foto" onClick={handleOpen} onMouseOver={() => { setAddPhotoDark(true) }} />
            }
        </div>
    )
}
