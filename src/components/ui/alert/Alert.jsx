import classes from './Alert.module.css';

export const Alert = ({isError = false, message}) => {
    return (
        <div className={ isError ? `${ classes.alert} ${classes.error}` : `${classes.alert} ${classes.success}`}> 
            <p>{message}</p>
        </div>
    )
}
