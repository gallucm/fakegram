import classes from './ProfileSection.module.css';
import { ImageProfile } from './ImageProfile';
import { PersonalProfileData } from './PersonalProfileData';

export const ProfileSection = ({user, posts}) => {
    return (
        <>
            <div className={classes.profile_container}>
                <ImageProfile user={user} />
                <PersonalProfileData user={user} posts={posts} />
            </div>
        </>
    )
}
