import { PostContentComments } from './comments/PostContentComments';
import { PostContentDescription } from './description/PostContentDescription';
import { PostContentHeader } from './header/PostContentHeader';
import { PostContentInput } from './input/PostContentInput';

import classes from './PostContent.module.css';

export const PostContent = ({ post }) => {

    const handleMoveScroll = () => {
        const postComments = document.getElementById('middleContent');
        postComments.scrollTop = postComments.scrollHeight;
    }

    return (
        <div className={classes.container}>
            <PostContentHeader post={post} />
            <div id="middleContent" className={classes.middle_content}>
                <PostContentDescription post={post} />
                <PostContentComments pid={post.pid}/>
            </div>
            <PostContentInput pid={post.pid} onMoveScroll={handleMoveScroll}/>
        </div>
    )
}
