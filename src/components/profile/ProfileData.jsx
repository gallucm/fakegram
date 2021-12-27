import { ProfileImage } from './Profileimage';

import classes from './ProfileData.module.css';

export const ProfileData = ({ user, posts }) => {
    return (
        <div className={classes.container}>
            <ProfileImage user={user} />

            <div className={classes.data}>
                <h2>{user.username}</h2>
                <button>Editar perfil</button>
                <div className={classes.stats}>
                    <p><strong>{posts.length}</strong>  publicaciones</p>
                    <p><strong>{user.info.followers}</strong>  seguidores</p>
                    <p><strong>{user.info.follows}</strong>  seguidos</p>
                </div>
                <strong><p>{user.name}</p></strong>
                <p>
                    {/* {user.info.description} */}
                    Programador.
                    San Miguel, Buenos Aires, Argentina.
                </p>
            </div>

        </div>
    )
}
