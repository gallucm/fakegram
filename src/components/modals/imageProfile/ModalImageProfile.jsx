import { Box, Modal } from '@mui/material';

import classes from './ModalImageProfile.module.css';

export const ModalImageProfile = ({ open, onCloseModal }) => {
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
                        <div className={classes.title}>
                            <p>Cambiar foto de perfil</p>
                        </div>
                        <div className={classes.upload}>
                            <p>Subir foto</p>
                        </div>
                        <div className={classes.delete}>
                            <p>Eliminar foto actual</p>
                        </div>
                        <div className={classes.cancel} onClick={onCloseModal}>
                            <p>Cancelar</p>
                        </div>
                    </section>
                </Box>
            </Modal>
        </>
    )
}
