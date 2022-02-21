
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateUserProfile } from '../../../actions/profile';
import { Alert } from '../../ui/alert/Alert';
import { Loading } from '../../ui/loading/Loading';

import classes from './EditSection.module.css';

export const EditSection = ({ user }) => {
  const dispatch = useDispatch();

  const { message, loading } = useSelector(state => state.ui);

  const { uid, name, username, email, info } = user;
  const { description } = info;

  const nameRef = useRef('');
  const usernameRef = useRef('');
  const emailRef = useRef('');
  const descriptionRef = useRef('');

  const handleSubmitProfile = (e) => {
    e.preventDefault();

    const userUpdate = {
      name: nameRef.current.value,
      username: usernameRef.current.value,
      email: emailRef.current.value,
      info: {
        description: descriptionRef.current.value,
      }
    }

    dispatch(updateUserProfile(uid, userUpdate));
  }

  return (
    <div className={classes.container}>
      <form action="POST" onSubmit={handleSubmitProfile}>
        <div className={classes.row}>
          <label htmlFor="name">Nombre</label>
          <input type="text" name='name' defaultValue={name} ref={nameRef} />
        </div>
        <div className={classes.row}>
          <label htmlFor="username">Nombre de Usuario</label>
          <input type="text" name='username' defaultValue={username} ref={usernameRef} />
        </div>
        <div className={classes.row}>
          <label htmlFor="description">Biografía</label>
          <textarea name="description" defaultValue={description} ref={descriptionRef}></textarea>
        </div>
        <div className={classes.row}>
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" name='name' defaultValue={email} ref={emailRef} />
        </div>
        <div className={`${classes.row} ${classes.center}`}>
          <button type="submit" disabled={loading}>
            {
              loading ? <Loading size='small'/> : 'Guardar'
            }
          </button>
        </div>
      </form>

      {
        (!loading && message) && <Alert message={message} />
      }
    </div>
  )
}
