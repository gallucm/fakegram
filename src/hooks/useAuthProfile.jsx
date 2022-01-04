import { useState } from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';

import { searchProfile } from '../actions/profile';

export const useAuthProfile = () => {

    const [userData, setUserData] = useState(null);

    const history = useHistory();

    const location = useLocation();
    const path = location.pathname;
    const username = path.replace('/', '');

    const handleSearchAuthProfile = async () => {
        const response = await searchProfile(username);

        if (response) {
            setUserData(response);
        } else {
            history.push('/');
        }
    }

    return {
        userData,
        setUserData,
        handleSearchAuthProfile
    }
}
