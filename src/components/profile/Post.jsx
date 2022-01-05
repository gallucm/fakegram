
import { useState } from 'react';
import { Loading } from '../ui/Loading';
import classes from './PostsSection.module.css';

export const Post = ({post}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleLoadImage = () => setImageLoaded(true);

    return (
        <div key={post} className={classes.post}>
            <img src={post.image} alt='post' onLoad={handleLoadImage} style={imageLoaded ? { display: 'inherit' } : { display: 'none' }}/>
            {
                    !imageLoaded && 
                    <Loading/>
            }
        </div>
    )
}
