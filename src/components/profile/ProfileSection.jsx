import classes from './ProfileSection.module.css';
// import { ProfileImage } from './Profileimage';
import { ProfileData } from './ProfileData';
import { useEffect } from 'react';
import { Loading } from '../ui/Loading';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useAuthProfile } from '../../hooks/useAuthProfile';
import { PostsSection } from './PostsSection';

export const ProfileSection = ({ userProp, postsProp }) => {

    const location = useLocation();

    const { userData, setUserData, handleSearchAuthProfile } = useAuthProfile();

    const { posts } = useSelector(state => state.profile)

    const path = location.pathname;

    useEffect(() => {

        if (userProp.username !== path.replace('/', '')) {
            handleSearchAuthProfile();
        } else {
            setUserData(userProp);
        }

    }, [handleSearchAuthProfile, userProp, path, setUserData]);

    if (!userData)
        return <Loading size='large' />

    return (
        <div className={classes.container}>
            <ProfileData user={userData} posts={posts} />
            <PostsSection />
        </div>
    )
}
