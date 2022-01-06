import { useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';


import classes from './Post.module.css';
import { Loading } from '../../ui/loading/Loading';
import { ModalPost } from '../../ui/modals/post/ModalPost';

export const Post = ({ post }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleLoadImage = () => setImageLoaded(true);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);


    return (
        <>
            <ModalPost open={openModal} onCloseModal={handleCloseModal} post={post}/>

            <div key={post} className={classes.post}>
                <img src={post.image} alt='post' onLoad={handleLoadImage} style={imageLoaded ? { display: 'inherit' } : { display: 'none' }} onClick={handleOpenModal}/>
                {
                    imageLoaded &&
                    (
                        <div className={classes.button_container}>
                            <button className={`${classes.button} ${classes.danger}`} title='Eliminar'>
                                <DeleteIcon />
                            </button>
                        </div>
                    )
                }
                {
                    !imageLoaded &&
                    <Loading />
                }
            </div>
        </>
    )
}