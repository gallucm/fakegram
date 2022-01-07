import classes from './PostImage.module.css';

export const PostImage = ({image}) => {
    return (
        <div className={classes.container}>
            <img src={image} alt='post' />
        </div>
    )
}
