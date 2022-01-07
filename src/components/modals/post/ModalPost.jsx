import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import classes from './ModalPost.module.css';
import { PostImage } from './image/PostImage';
import { PostContent } from './content/PostContent';

export const ModalPost = ({ open, onCloseModal, post }) => {

    return (
        <>
            <Modal
                open={open}
                onClose={onCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.box}>
                    <section className={classes.container}>
                        <PostImage image={post.image} />
                        <PostContent post={post} />
                    </section>
                </Box>
            </Modal>
        </>
    )
}
