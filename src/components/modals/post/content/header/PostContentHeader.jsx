import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import classes from './PostContentHeader.module.css';

export const PostContentHeader = ({post}) => {
    return (
        <div className={classes.container}>
            <img src={post.imageProfile} alt="" />
            <span>{post.username}</span>

                <MoreHorizIcon className={classes.btn_options}/>       
        </div>
    )
}
