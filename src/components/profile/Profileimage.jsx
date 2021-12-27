
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateImage } from '../../actions/profile';
import { profileActions } from '../../store/profile-slice';
import { Loading } from '../ui/Loading';

import classes from './ProfileImage.module.css';

export const ProfileImage = ({user}) => {
    const dispatch = useDispatch();
    const [imageLoad, setImageLoad] = useState(false);


    const handlerImageProfileChange = async (e) => {
        setImageLoad(false);

        const imageFile = e.target.files[0];
        const newUrlImage = await updateImage(user.uid, imageFile);
        dispatch(profileActions.loadUser({
            ...user,
            imageProfile: newUrlImage
        }));
    }

    const handleImageLoad = () => {
        setImageLoad(!imageLoad);
    }

    return (
        <div className={classes.container}>
            <label htmlFor="file-input">
                <img src={user.imageProfile} alt="Profile Pic" onLoad={handleImageLoad} style={imageLoad ? { display: 'inherit' } : { display: 'none' }} /> 
                {
                    !imageLoad && 
                    <Loading/>
                }
            </label>
            <input type="file" id="file-input" onChange={handlerImageProfileChange} accept="image/png, image/gif, image/jpeg" />
        </div>
    )
}
