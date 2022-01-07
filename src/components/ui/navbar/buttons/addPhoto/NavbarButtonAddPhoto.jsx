import { useState } from 'react';

import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

import { ModalUpload } from '../../../../modals/upload/ModalUpload';

import classes from '../../icons/NavbarIcons.module.css';


export const NavbarButtonAddPhoto = ({ user }) => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => setOpenModal(true);

    const handleClose = () => {
        setOpenModal(false);
        // getPosts(user.uid);
    }

    // const handleUploadFile = async (file, description) => {
    //     const post = {
    //         file,
    //         description,
    //         user: userStorage,
    //     }

    //     await createPost(post);
    //     handleClose();
    // }

    return (
        <div>
            <ModalUpload open={openModal} onCloseModal={handleClose} user={user} />
            <AddPhotoAlternateOutlinedIcon className={classes.icon} titleAccess="Subir foto" onClick={handleOpen} />
        </div>
    )
}
