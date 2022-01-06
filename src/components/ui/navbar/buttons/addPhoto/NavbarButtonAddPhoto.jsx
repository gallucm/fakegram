import { useState } from 'react';

import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


import classes from '../../icons/NavbarIcons.module.css';
import { getLoginData } from '../../../../../services/utils';
import { createPost } from '../../../../../actions/posts';
import { usePosts } from '../../../../../hooks/usePosts';
import { ModalUpload } from '../../../modals/upload/ModalUpload';

export const NavbarButtonAddPhoto = ({ user }) => {

    const { getPosts } = usePosts();

    const { uid } = getLoginData();
    const userStorage = {
        uid,
        imageProfile: user.imageProfile,
        username: user.username,
    }

    const [addPhotoDark, setAddPhotoDark] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => setOpenModal(true);

    const handleClose = () => {
        setOpenModal(false);
        getPosts(user.uid);
    }

    const handleUploadFile = async (file, description) => {
        const post = {
            file,
            description,
            user: userStorage,
        }

        await createPost(post);
        handleClose();
    }

    return (
        <div>
            <ModalUpload open={openModal} onCloseModal={handleClose} onUploadFile={handleUploadFile} />

            {
                addPhotoDark
                    ? <AddPhotoAlternateIcon className={classes.icon} titleAccess="Subir foto" onClick={handleOpen} onMouseLeave={() => { setAddPhotoDark(false) }} />
                    : <AddPhotoAlternateOutlinedIcon className={classes.icon} titleAccess="Subir foto" onClick={handleOpen} onMouseOver={() => { setAddPhotoDark(true) }} />
            }
        </div>
    )
}
