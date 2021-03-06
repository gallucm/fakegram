import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { ProfileImage } from '../image/Profileimage';

import classes from './ProfileData.module.css';

export const ProfileData = ({ user, posts }) => {
    const history = useHistory();

    const handleEditProfile = (e) => {
        e.preventDefault();
        history.push('/account/edit/');
    }

    return (
        <div className={classes.container}>
            <ProfileImage user={user} />
            <div className={classes.data}>
                <div className={classes.first_section}>
                    <h2>{user.username}</h2>
                    <button onClick={handleEditProfile}>Editar perfil</button>
                </div>
                <div className={classes.stats}>
                    <p><strong>{posts.length}</strong>  publicaciones</p>
                    <p><strong>0</strong>  seguidores</p>
                    <p><strong>0</strong>  seguidos</p>
                </div>
                <div>
                    <strong><p>{user.name}</p></strong>
                    <p>
                        {user.description}
                    </p>
                </div>
            </div> 
        </div>
    )
}
