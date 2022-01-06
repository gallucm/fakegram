import classes from './PostContentInput.module.css';

export const PostContentInput = () => {
    return (
        <div className={classes.container}>
            <textarea></textarea>
            <button disabled>Publicar</button>
        </div>
    )
}
