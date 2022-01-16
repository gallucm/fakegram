import ReactTimeAgo from 'react-time-ago';

import classes from './PostContentDescription.module.css';

export const PostContentDescription = ({post}) => {

    const { description, createdAt, userData: {imageProfile, username} } = post;

    return (
        <div className={classes.container}>
            <div className={classes.image}>
                <img src={imageProfile} alt="" />
            </div>
            <div className={classes.description}>
                <div className={classes.data}>
                    <span>
                        <strong>
                            {username}
                        </strong>
                        <br/>
                        <p>
                            {description}
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
