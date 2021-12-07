import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { searchProfile, searchProfileById } from '../actions/profile';

import { profileActions } from '../store/profile-slice';

export const useProfile = (props) => {

    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();

    const userProfile = location.pathname;

    const handleSearchProfile = async (userId = null) => {
        if (userId) {
            const response = await searchProfileById(userId);

            if (response){
                dispatch(profileActions.loadUser(response));
            } else {
                history.push('/');
            }
        } else {
            const profileResult = await searchProfile(userProfile);

            if (profileResult) {
                dispatch(profileActions.loadUser(profileResult));
            } else {
                history.push('/');
            }

        }
    }

    return [
        handleSearchProfile
    ]
}
