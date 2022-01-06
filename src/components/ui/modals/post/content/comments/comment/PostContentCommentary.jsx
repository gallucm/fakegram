import classes from './PostContentCommentary.module.css';

export const PostContentCommentary = ({post}) => {
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
            </div>
        </div>
    )
}
