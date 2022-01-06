import ReactTimeAgo from 'react-time-ago';

import classes from './PostContentDescription.module.css';

export const PostContentDescription = ({post}) => {
    return (
        <div className={classes.container}>
            <div className={classes.image}>
                <img src={post.imageProfile} alt="" />
            </div>
            <div className={classes.description}>
                <div className={classes.data}>
                    <span>
                        <strong>
                            {post.username}
                        </strong>
                        <br/>
                        <p>
                            {post.description}
                        </p>
                    </span>
                </div>
                <div className={classes.date}>
                    <ReactTimeAgo date={new Date(post.createdAt)} locale="es" title={post.createdAt}/>
                </div>
            </div>
        </div>
    )
}
