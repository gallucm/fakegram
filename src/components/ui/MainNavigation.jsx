import { useRef } from 'react'
import { useHistory } from 'react-router';

import classes from './MainNavigation.module.css';
import { NavbarButtonProfile } from './NavbarButtonProfile';
import { NavbarIcons } from './NavbarIcons';

export const MainNavigation = ({imageProfile}) => {
    const history = useHistory();

    const inputSearchRef = useRef();

    const handleSearchClick = () => {
        // const input = inputSearchRef.current.value;
    }

    const handleHomeClick = () => {
        history.push('/');
    }

    return (
        <header>
            <div className={classes.navbar}>
                <h1 className={classes.logo} onClick={handleHomeClick}>Fakegram</h1>
                <input type="text" className={classes.input_search} ref={inputSearchRef} placeholder="Busca" onKeyUp={handleSearchClick} />
                <div className={classes.buttons}>
                    <NavbarIcons/>
                    <NavbarButtonProfile imageProfile={imageProfile}/>
                </div>
            </div>
        </header>
    )
}
