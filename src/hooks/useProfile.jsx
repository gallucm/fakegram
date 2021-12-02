import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { searchProfile } from '../actions/profile';

import { profileActions } from '../store/profile-slice';

export const useProfile = () => {
    const [searchingProfile, setSearchingProfile] = useState(true);

    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();

    const userProfile = location.pathname;

    const handleSearchProfile = async () => {

        const profileResult = await searchProfile(userProfile);

        if (profileResult) {
            setSearchingProfile(false);
            dispatch(profileActions.loadUser(profileResult));
        } else {
            setSearchingProfile(false);
            history.push('/');
        }
    }

    return [
        searchingProfile,
        handleSearchProfile
    ]
}
