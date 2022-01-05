import { useState } from 'react';

import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import { ModalUpload } from './ModalUpload';

import classes from './NavbarIcons.module.css';
import { createPost } from '../../actions/posts';
import { getLoginData } from '../../services/utils';

export const NavbarButtonAddPhoto = ({user}) => {
    
    const { uid } = getLoginData();
    const userStorage = {
        uid,
        imageProfile: user.imageProfile,
        username: user.username,
    }

    const [addPhotoDark, setAddPhotoDark] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const handleUploadFile = async(file, description) => {
        await createPost(file, description, userStorage);
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
