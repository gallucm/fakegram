
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateImage, updateUserProfile } from '../../../actions/profile';
import { ModalImageProfile } from '../../modals/imageProfile/ModalImageProfile';
import { Alert } from '../../ui/alert/Alert';
import { Loading } from '../../ui/loading/Loading';

import classes from './EditSection.module.css';

export const EditSection = ({ user }) => {
  const dispatch = useDispatch();

  const [enableSubmit, setEnableSubmit] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { message, loading } = useSelector(state => state.ui);

  const { uid, name, username, email, description } = user;

  const nameRef = useRef('');
  const usernameRef = useRef('');
  const emailRef = useRef('');
  const descriptionRef = useRef('');

  const handleSubmitProfile = (e) => {
    e.preventDefault();

    const update = {
      name: nameRef.current.value,
      username: usernameRef.current.value,
      email: emailRef.current.value,
      description: descriptionRef.current.value,
    }

    dispatch(updateUserProfile(uid, update));
  }

  const handleOpenModal = () => {
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  const handleChange = (e) => {
    e.preventDefault();

    const { name: nameTarget, value } = e.target;

    switch (nameTarget) {
      case 'name':
        if (value !== name)
          setEnableSubmit(true);
        else
          setEnableSubmit(false);
        break;

      case 'username':
        if (value !== username)
          setEnableSubmit(true);
        else
          setEnableSubmit(false);
        break;

      case 'email':
        if (value !== email)
          setEnableSubmit(true);
        else
          setEnableSubmit(false);
        break;

      case 'description':
        if (value !== description)
          setEnableSubmit(true);
        else
          setEnableSubmit(false);
        break;

      default:
        setEnableSubmit(false);
    }
  }

  const handlerImageProfileChange = async (e) => {
    handleCloseModal();
    e.preventDefault();
    const imageFile = e.target.files[0];

    dispatch(updateImage(uid, imageFile));
  }

  return (
    <div className={classes.container}>
      <ModalImageProfile open={openModal} onCloseModal={handleCloseModal} onImageChange={handlerImageProfileChange} />
      <form action="POST" onSubmit={handleSubmitProfile}>
        <div className={classes.row}>
          {
            loading
              ?
              <div className={classes.loading_content}>
                <Loading size='small' />
              </div>
              :
              <img src={user.imageProfile} alt="" />
          }
          <div className={classes.col}>
            <p>gallucm</p>
            <span onClick={handleOpenModal}>Cambiar foto de perfil</span>
          </div>
        </div>
        <div className={classes.row}>
          <label htmlFor="name">Nombre</label>
          <input type="text" name='name' defaultValue={name} ref={nameRef} onChange={handleChange} />
        </div>
        <div className={classes.row}>
          <label htmlFor="username">Nombre de Usuario</label>
          <input type="text" name='username' defaultValue={username} ref={usernameRef} onChange={handleChange} />
        </div>
        <div className={classes.row}>
          <label htmlFor="description">Biografía</label>
          <textarea name="description" defaultValue={description} ref={descriptionRef} onChange={handleChange}></textarea>
        </div>
        <div className={classes.row}>
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" name='email' defaultValue={email} ref={emailRef} onChange={handleChange} />
        </div>
        <div className={`${classes.row} ${classes.center}`}>
          <button type="submit" disabled={loading || !enableSubmit}>
            {
              loading ? <Loading size='small' /> : 'Guardar'
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
