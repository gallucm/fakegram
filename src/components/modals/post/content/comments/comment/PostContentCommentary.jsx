import ReactTimeAgo from 'react-time-ago';

import CloseIcon from '@mui/icons-material/Close';

import classes from './PostContentCommentary.module.css';
import { usePosts } from '../../../../../../hooks/usePosts';

export const PostContentCommentary = ({ pid, commentary }) => {

    const { deleteComment } = usePosts();

    const { user, comment, createdAt } = commentary;

    const handleDeleteComment = () => {
        deleteComment(pid, commentary.cid);
    }

    return (
        <div className={classes.container}>
            <div className={classes.image}>
                <img src={user.image} alt="" />
            </div>
            <div className={classes.description}>
                <div className={classes.data}>
                    <span>
                        <strong>
                            {user.username}
                        </strong>
                        <br />
                        <p>
                            {comment}
                        </p>
                    </span>
                </div>
                <div className={classes.date}>
                    <ReactTimeAgo date={new Date(createdAt)} locale="es" title={createdAt} />
                </div>
            </div>
            <CloseIcon className={classes.close} titleAccess='Eliminar' onClick={handleDeleteComment}/>
        </div>
    )
}
