import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { searchProfile } from '../actions/profile';

import { profileActions } from '../store/profile-slice';

export const useProfile = () => {
    const [searchingProfile, setSearchingProfile] = useState(true);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSearchProfile = async (profile) => {
        const profileResult = await searchProfile(profile);

        if (profileResult) {
            dispatch(profileActions.loadUser(profileResult));
            setSearchingProfile(false);
        } else {
            history.push('/');
            setSearchingProfile(false);
        }
    }

    return [
        searchingProfile,
        handleSearchProfile
    ]
}
