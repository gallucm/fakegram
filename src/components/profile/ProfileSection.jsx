import classes from './ProfileSection.module.css';
// import { ProfileImage } from './Profileimage';
import { ProfileData } from './ProfileData';

export const ProfileSection = ({user, posts}) => {
    return (
        <>
            <div className={classes.container}>
                <ProfileData user={user} posts={posts}/>
            </div>
        </>
    )
}
