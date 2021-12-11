import classes from './ProfileSection.module.css';
// import noProfile from '../../assets/images/thumb-profile.png';
import { useProfile } from '../../hooks/useProfile';
import { PostsSection } from './PostsSection';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ImageProfile } from './ImageProfile';

export const  ProfileSection = () => {
    const [load, setLoad] = useState(false);

    const [searchProfile] = useProfile();

    const { user, posts } = useSelector(state => state.profile);

    useEffect(() => {
        if (!load) {
            setLoad(true);
            searchProfile();
        }
    }, [searchProfile, load]);

    if (!user) {
        return <div className="loader"></div>
    }

    return (
        <>
            <div className={classes.profile_section_container}>
                <ImageProfile user={user} />
                
                <div className={classes.profile_section_container__data}>
                    <section className={classes.profile_section_container__data__section1}>
                        <h2>{user.username}</h2>
                        <button>Editar perfil</button>
                    </section>
                    <section className={classes.profile_section_container__data__section2}>
                        <div className={classes.profile_section_container__data__section2__item}>
                            <p><strong>{posts.length}</strong>  publicaciones</p>
                        </div>
                        <div className={classes.profile_section_container__data__section2__item}>
                            <p><strong>{user.info.followers}</strong>  seguidores</p>
                        </div>
                        <div className={classes.profile_section_container__data__section2__item}>
                            <p><strong>{user.info.follows}</strong>  seguidos</p>
                        </div>
                    </section>
                    <section className={classes.profile_section_container__data__section3}>
                        <strong><p>{user.name}</p></strong>
                        <span className={classes.profile_section_container__data__section3__item}>
                            <p>
                                {user.info.description}
                            </p>
                        </span>

                    </section>
                </div>
            </div>

            <PostsSection />
        </>
    )
}
