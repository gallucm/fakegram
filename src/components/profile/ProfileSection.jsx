import classes from './ProfileSection.module.css';
import avatar from '../../assets/images/avatar.png';

export const ProfileSection = () => {

    return (
        <>
            <div className={classes.profile_section_container}>
                <div className={classes.profile_section_container__profile_img}>
                    <img src={avatar} alt="Profile Pic" />
                </div>
                <div className={classes.profile_section_container__data}>
                    <section className={classes.profile_section_container__data__section1}>
                        <h2>gallucm</h2>
                        <button>Editar perfil</button>
                    </section>
                    <section className={classes.profile_section_container__data__section2}>
                        <div className={classes.profile_section_container__data__section2__item}>
                            <p><strong>122</strong>  publicaciones</p>
                        </div>
                        <div className={classes.profile_section_container__data__section2__item}>
                            <p><strong>205</strong>  seguidores</p>
                        </div>
                        <div className={classes.profile_section_container__data__section2__item}>
                            <p><strong>201</strong>  seguidos</p>
                        </div>
                    </section>
                    <section className={classes.profile_section_container__data__section3}>
                        <strong><p>Cristian Galluccio</p></strong>
                        <span className={classes.profile_section_container__data__section3__item}>
                            <p>
                                Buenos Aires, Argentina
                                <br />
                                Programador
                                <br />
                                Enjoy
                            </p>
                        </span>

                    </section>
                </div>
            </div>
        </>
    )
}
