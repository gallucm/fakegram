// import { Loading } from '../../../../ui/loading/Loading';
import { PostContentCommentary } from './comment/PostContentCommentary';
import classes from './PostContentComments.module.css';

export const PostContentComments = ({ comments }) => {
    return (
        <div className={classes.container} id="comments">
            {
                comments.map((comment, idx) => (
                    <PostContentCommentary key={idx} commentary={comment} />
                ))
            }
        </div>
    )
}
