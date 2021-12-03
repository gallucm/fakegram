import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { searchProfile } from '../actions/profile';

import { profileActions } from '../store/profile-slice';

export const useProfile = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();

    const userProfile = location.pathname;

    const handleSearchProfile = async () => {

        const profileResult = await searchProfile(userProfile);

        if (profileResult) {
            dispatch(profileActions.loadUser(profileResult));
        } else {
            history.push('/');
        }
    }

    return [
        handleSearchProfile
    ]
}
