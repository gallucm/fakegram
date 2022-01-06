import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import classes from './ModalPost.module.css';

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
                        <div className={classes.picture}>
                            <img src={post.image} alt='post' />
                        </div>
                        <section className={classes.content}>
                            <div className={classes.top_section}>
                                <img src={post.imageProfile} alt="" />
                                <span>{post.username}</span>
                            </div>
                            <div className={classes.description}>
                                <div className={classes.text}>
                                    <img src={post.imageProfile} alt="" />
                                    <span>{post.username}</span>
                                    <span>{post.description}</span>
                                </div>
                                <p>{post.createdAt}</p>
                            </div>
                            <textarea className={classes.new_comment}>
                            </textarea>
                        </section>
                    </section>
                </Box>
            </Modal>
        </>
    )
}
