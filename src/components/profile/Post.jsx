
import { useState } from 'react';
import { Loading } from '../ui/Loading';
import classes from './Post.module.css';

import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export const Post = ({ post }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleLoadImage = () => setImageLoaded(true);

    return (
        <div key={post} className={classes.post}>
            <img src={post.image} alt='post' onLoad={handleLoadImage} style={imageLoaded ? { display: 'inherit' } : { display: 'none' }} />
            {
                imageLoaded &&
                (
                    <div className={classes.button_container}>
                        {/* <button className={`${classes.button} ${classes.info}`} title='Ver'>
                            <RemoveRedEyeIcon/>
                        </button> */}
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
    )
}
