import { PostContentComments } from './comments/PostContentComments';
import { PostContentDescription } from './description/PostContentDescription';
import { PostContentHeader } from './header/PostContentHeader';
import { PostContentInput } from './input/PostContentInput';

import classes from './PostContent.module.css';

export const PostContent = ({ post }) => {

    const { comments, pid, userData: { username, imageProfile} } = post;

    const handleMoveScroll = () => {
        const postComments = document.getElementById('middleContent');
        postComments.scrollTop = postComments.scrollHeight;
    }

    return (
        <div className={classes.container}>
            <PostContentHeader username={username} imageProfile={imageProfile} />
            <div id="middleContent" className={classes.middle_content}>
                <PostContentDescription post={post} />
                {
                    comments && comments.length > 0 &&
                    <PostContentComments comments={comments} pid={pid}/>
                }
            </div>
            <PostContentInput pid={pid} onMoveScroll={handleMoveScroll}/>
        </div>
    )
}
