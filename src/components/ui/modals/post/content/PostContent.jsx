import { PostContentDescription } from './description/PostContentDescription';
import { PostContentHeader } from './header/PostContentHeader';
import classes from './PostContent.module.css';

export const PostContent = ({post}) => {
    return (
        <div className={classes.container}>
            <PostContentHeader post={post} />
            <PostContentDescription post={post} />
            <textarea className={classes.new_comment}>
            </textarea>
        </div>
    )
}
