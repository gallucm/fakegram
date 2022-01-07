import ReactTimeAgo from 'react-time-ago';

import classes from './PostContentCommentary.module.css';

export const PostContentCommentary = ({commentary}) => {

    const { user, comment, createdAt } = commentary;

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
                        <br/>
                        <p>
                            {comment}
                        </p>
                    </span>
                </div>
                <div className={classes.date}>
                    <ReactTimeAgo date={new Date(createdAt)} locale="es" title={createdAt}/>
                </div>
            </div>
        </div>
    )
}
