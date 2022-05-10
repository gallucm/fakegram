
import { useRef, useState } from 'react';
import classes from './PasswordSection.module.css';

export const PasswordSection = () => {

  const [canUpdate, setCanUpdate] = useState(false);
  const [samePassword, setSamePassword] = useState(false);

  const pass1Ref = useRef('');
  const pass2Ref = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    e.preventDefault();

    if (pass1Ref.current.value === "" || pass2Ref.current.value === "") {
      setSamePassword(false);
      setCanUpdate(false);
    }

    if ((pass1Ref.current.value !== "" && pass2Ref.current.value !== "") && 
        (pass1Ref.current.value === pass2Ref.current.value)) {
      setCanUpdate(false);
      setSamePassword(true);
    }

    if ((pass1Ref.current.value !== "" && pass2Ref.current.value !== "") &&
       (pass1Ref.current.value !== pass2Ref.current.value)) {
      setCanUpdate(true);
      setSamePassword(false);
    }
  }


  return (
    <div className={classes.container}>
      <form action="POST" onSubmit={handleSubmit}>
        <div className={classes.row}>
          <label htmlFor="name">Contraseña actual</label>
          <input type="password" name='pass1' ref={pass1Ref} onChange={handleChange}/>
        </div>
        <div className={classes.row}>
          <label htmlFor="name">Contraseña nueva</label>
          <input type="password" name='pass2' ref={pass2Ref} onChange={handleChange}/>
        </div>

        {
          samePassword &&
          <div className={classes.row}>
            <p>La contraseña nueva no puede ser igual a la anterior.</p>
          </div>
        }

        <div className={classes.row}>
          <button type="submit" disabled={!canUpdate}>
            Actualizar
          </button>
        </div>
      </form >
    </div >
  )
}