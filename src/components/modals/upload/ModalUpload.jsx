import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CancelIcon from '@mui/icons-material/Cancel';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

import classes from './ModalUpload.module.css';
import {useRef, useState } from 'react';
import { useUpload } from '../../../hooks/useUpload';

export const ModalUpload = ({ open, onCloseModal, user }) => {

    const {handleUpload } = useUpload();

    const refDescription = useRef('');

    const [isFileLoaded, setIsFileLoaded] = useState(false);
    const [loadFile, setLoadFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const onLoadFile = (e) => {
        const file = e.target.files[0];

        if (file) {
            setLoadFile(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewImage(e.target.result);
                setIsFileLoaded(true);
            }

            reader.readAsDataURL(file);
        }
    }

    const onUpload = () => {
        handleUpload(loadFile, refDescription.current.value, user);

        onCloseModal();
    }

    return (
        <>
            <Modal
                open={open}
                onClose={onCloseModal}
                disableEscapeKeyDown
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ outlineStyle: 'none' }}>
                    <div className={classes.container}>
                        {
                            isFileLoaded
                            &&
                            (
                                <div className={classes.post_container}>
                                    <img src={previewImage} alt="Post Pic" />
                                    <textarea name="description" id="description" ref={refDescription}>
                                    </textarea>
                                    <div className={classes.buttons}>
                                        <button onClick={() => { onUpload() }}>
                                            <CloudUploadIcon />
                                            <span>Guardar</span>
                                        </button>
                                        <button className={classes.cancel} onClick={onCloseModal}>
                                            <CancelIcon />
                                            <span>Cancelar</span>
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                        {
                            !isFileLoaded
                            &&
                            (<div className={classes.upload_container}>
                                <label className={classes.custom_file}>
                                    <input type="file" id="file-input" accept="image/png, image/gif, image/jpeg" style={{ display: 'none' }} onChange={onLoadFile} />
                                    <InsertPhotoIcon />
                                    <span>
                                        Seleccionar
                                    </span>
                                </label>
                                <button className={classes.cancel} onClick={onCloseModal}>
                                    <CancelIcon />
                                    <span>Cancelar</span>
                                </button>
                            </div>
                            )
                        }                        
                    </div>
                </Box>
            </Modal>
        </>
    )
}
