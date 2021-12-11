import { useEffect, useState } from 'react';

import { useProfile } from '../hooks/useProfile';
import { getLoginData } from '../services/utils'

import { Feed } from '../components/feed/Feed';
import { Navbar } from '../components/ui/Navbar'

export const Index = () => {

    const [load, setLoad] = useState(false);

    const [searchProfile] = useProfile();

    const userData = getLoginData();

    useEffect(() => {
        if (!load && userData) {
            setLoad(true);
            searchProfile(userData.uid);
        }
    }, [load, userData, searchProfile]);

    return (
        <Navbar>
            <div>
                <Feed/>
            </div>
        </Navbar>
    )
}
