
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Loading } from '../../ui/loading/Loading';

import classes from './ProfileImage.module.css';

export const ProfileImage = ({user}) => {
    const [imageLoad, setImageLoad] = useState(false);

    // const handlerImageProfileChange = async (e) => {
    //     e.preventDefault();
        
    //     setImageLoad(false);

    //     const imageFile = e.target.files[0];
    //     const newUrlImage = await updateImage(user.uid, imageFile);
    //     dispatch(authActions.updateUserImage(newUrlImage));
    // }

    const handleImageLoad = () => {
        setImageLoad(!imageLoad);
    }

    return (
        <div className={classes.container}>
            <label htmlFor="file-input">
                <img src={user.imageProfile} alt="Profile Pic" className={classes.image} onLoad={handleImageLoad} style={imageLoad ? { display: 'inherit' } : { display: 'none' }} /> 
                {/* <div className={classes.text}>Seleccionar Foto</div> */}
                {
                    !imageLoad && 
                    <Loading/>
                }
            </label>
            {/* <input type="file" id="file-input" onChange={handlerImageProfileChange} accept="image/png, image/gif, image/jpeg" /> */}
        </div>
    )
}
