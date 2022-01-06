import classes from './PostContentHeader.module.css';

export const PostContentHeader = ({post}) => {
    return (
        <div className={classes.container}>
            <img src={post.imageProfile} alt="" />
            <span>{post.username}</span>
        </div>
    )
}
