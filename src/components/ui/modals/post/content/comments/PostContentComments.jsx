import { PostContentCommentary } from './comment/PostContentCommentary';
import classes from './PostContentComments.module.css';

export const PostContentComments = ({post}) => {
    return (
        <div className={classes.container}>
            <PostContentCommentary post={post} />
        </div>
    )
}
