import classes from './Loading.module.css';

export const Loading = ({ size = 'medium' }) => {

    const spinnerSize = size === 'small' ? classes.small : 'medium' ? classes.medium : classes.large;

    return (
        <div className={`${classes.spinner} ${spinnerSize}`}>
        </div>
    )
}
