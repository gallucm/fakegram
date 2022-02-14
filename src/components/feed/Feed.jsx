import classes from './Feed.module.css';

export const Feed = ({userProp}) => {
    console.log(userProp)
    return (
        <div className={classes.container}> 
            <h1>The feed</h1>
        </div>
    )
}
