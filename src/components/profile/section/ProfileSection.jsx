import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { useAuthProfile } from '../../../hooks/useAuthProfile';

import { Loading } from '../../ui/loading/Loading';

import classes from './ProfileSection.module.css';
import { PostsSection } from '../../posts/section/PostsSection';
import { ProfileData } from '../data/ProfileData';

export const ProfileSection = ({ userProp }) => {
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
            <PostsSection uid={userData.uid}/>
        </div>
    )
}
