import { PostContentComments } from './comments/PostContentComments';
import { PostContentDescription } from './description/PostContentDescription';
import { PostContentHeader } from './header/PostContentHeader';
import { PostContentInput } from './input/PostContentInput';
import classes from './PostContent.module.css';

export const PostContent = ({post}) => {
    return (
        <div className={classes.container}>
            <PostContentHeader post={post} />
            <div className={classes.middle_content}>
                <PostContentDescription post={post} />
                <PostContentComments post={post}/>
            </div>
            <PostContentInput/>
        </div>
    )
}
