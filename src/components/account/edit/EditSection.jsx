
import classes from './EditSection.module.css';

export const EditSection = ({user}) => {

  const { name, username, email, info } = user;
  const { description } = info;

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <label htmlFor="name">Nombre</label>
        <input type="text" name='name' defaultValue={name} />
      </div>
      <div className={classes.row}>
        <label htmlFor="username">Nombre de Usuario</label>
        <input type="text" name='username' defaultValue={username}/>
      </div>
      <div className={classes.row}>
        <label htmlFor="description">Biografía</label>
        <textarea name="description" defaultValue={description}></textarea>
      </div>
      <div className={classes.row}>
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" name='name' defaultValue={email}/>
      </div>
      <div className={`${classes.row} ${classes.center}`}>
        <button>Guardar</button>
      </div>
    </div>
  )
}
