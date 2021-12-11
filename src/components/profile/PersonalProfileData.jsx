import classes from './PersonalProfileData.module.css';

export const PersonalProfileData = ({user, posts}) => {
    return (
        <div className={classes.profile_data}>
            <section className={classes.section1}>
                <h2>{user.username}</h2>
                <button>Editar perfil</button>
            </section>
            <section className={classes.section2}>
                <div className={classes.section2__item}>
                    <p><strong>{posts.length}</strong>  publicaciones</p>
                </div>
                <div className={classes.section2__item}>
                    <p><strong>{user.info.followers}</strong>  seguidores</p>
                </div>
                <div className={classes.section2__item}>
                    <p><strong>{user.info.follows}</strong>  seguidos</p>
                </div>
            </section>
            <section className={classes.section3}>
                <strong><p>{user.name}</p></strong>
                <span className={classes.section3__item}>
                    <p>
                        {user.info.description}
                    </p>
                </span>
            </section>
        </div>
    )
}
