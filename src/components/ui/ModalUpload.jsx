import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import classes from './ModalUpload.module.css';
import { useEffect, useState } from 'react';
import { Loading } from './Loading';

export const ModalUpload = ({ open, onCloseModal, onUploadFile }) => {

    const [isFileLoaded, setIsFileLoaded] = useState(false);
    const [loadFile, setLoadFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 550,
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
        setIsLoading(true);
        onUploadFile(loadFile);
        setIsFileLoaded(false);
        setLoadFile(null);
        setPreviewImage(null);
    }

    useEffect(() => {
        if (!open){
            setIsFileLoaded(false);
            setLoadFile(null);
            setPreviewImage(null);
            setIsLoading(false);
        }
    }, [open]);

    return (
        <>
            <Modal
                open={open}
                onClose={onCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ outlineStyle: 'none' }}>
                    <div className={classes.container}>
                        {
                            isFileLoaded && !isLoading
                            &&
                            (
                                <div className={classes.post_container}>
                                    <img src={previewImage} alt="Post Pic" />
                                    <button onClick={() => { onUpload() }}>
                                        <CloudUploadIcon />
                                        <span>Subir Foto</span>
                                    </button>
                                </div>
                            )
                        }
                        {
                            !isFileLoaded && !isLoading
                            &&
                            (
                                <label className={classes.custom_file}>
                                    <input type="file" id="file-input" accept="image/png, image/gif, image/jpeg" style={{ display: 'none' }} onChange={onLoadFile} />
                                    Seleccionar Foto
                                </label>
                            )
                        }
                        {
                            (isLoading)
                            &&
                            <Loading size="large" />
                        }
                    </div>
                </Box>
            </Modal>
        </>
    )
}
