import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useProfile } from '../hooks/useProfile';

import { Feed } from '../components/feed/Feed';
import { Navbar } from '../components/ui/Navbar'
import { Loading } from '../components/ui/Loading';
import { useState } from 'react';

export const Index = () => {
    const [load, setLoad] = useState(false);

    const [ handleSearchProfile ] = useProfile();

    const { user } = useSelector(state => state.profile);

    useEffect(() => {
        if (!load){
            handleSearchProfile();
            setLoad(true);
        }
    }, [handleSearchProfile, load]);

    if (!user){
        return <Loading size='large' />
    }

    return (
        <Navbar imageProfile={user.imageProfile}>
            <div>
                <Feed/>
            </div>
        </Navbar>
    )
}
