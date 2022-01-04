import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { PostsSection } from '../components/profile/PostsSection';
import { ProfileSection } from '../components/profile/ProfileSection';

import { useProfile } from '../hooks/useProfile';

import { Navbar } from '../components/ui/Navbar';
import { Loading } from '../components/ui/Loading';

export const Profile = () => {
    const [load, setLoad] = useState(false);

    const [searchProfile] = useProfile();

    const { user, posts } = useSelector(state => state.profile);

    useEffect(() => {
        if (!load) {
            setLoad(true);
            searchProfile();
        }
    }, [searchProfile, load]);

    if (!user) {
        return <Loading size='large' />
    }

    return (
        <Navbar imageProfile={user.imageProfile}>
            <ProfileSection posts={posts} user={user}/>
            <PostsSection posts={posts}/>
        </Navbar>
    )
}
