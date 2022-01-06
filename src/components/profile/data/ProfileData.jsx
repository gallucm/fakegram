import { ProfileImage } from '../image/Profileimage';

import classes from './ProfileData.module.css';

export const ProfileData = ({ user, posts }) => {

    return (
        <div className={classes.container}>
            <ProfileImage user={user} />
            <div className={classes.data}>
                <div className={classes.first_section}>
                    <h2>{user.username}</h2>
                    <button>Editar perfil</button>
                </div>
                <div className={classes.stats}>
                    <p><strong>{posts.length}</strong>  publicaciones</p>
                    <p><strong>{user.info.followers}</strong>  seguidores</p>
                    <p><strong>{user.info.follows}</strong>  seguidos</p>
                </div>
                <strong><p>{user.name}</p></strong>
                <p>
                    Programador.
                    San Miguel, Buenos Aires, Argentina.
                </p>
            </div> 
        </div>
    )
}
