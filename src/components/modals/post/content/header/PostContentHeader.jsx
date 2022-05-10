import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import classes from './PostContentHeader.module.css';

export const PostContentHeader = ({imageProfile, username}) => {

    return (
        <div className={classes.container}>
            <img src={imageProfile} alt="" />
            <span>{username}</span>
            <MoreHorizIcon className={classes.btn_options}/>       
        </div>
    )
}
