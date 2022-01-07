import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router';

import classes from './MainNavigation.module.css';
import { NavbarButtonProfile } from '../buttons/profile/NavbarButtonProfile';
import { NavbarIcons } from '../icons/NavbarIcons';
import { useLocation } from 'react-router-dom';

export const MainNavigation = ({user}) => {
    const history = useHistory();

    const inputSearchRef = useRef();

    const location = useLocation();

    const path = location.pathname;

    const [option, setOption] = useState('');

    const handleSearchClick = () => {
        // const input = inputSearchRef.current.value;
    }

    const handleHomeClick = () => {
        history.push('/');
    }

    useEffect(() => {
        switch (path) {
            case '/messages':
                setOption('msg');
                break;
            case '/' + user.username:
                setOption('profile');
                break;
            default:
                setOption('home');
        }
    }, [path, user.username]);

    return (
        <header>
            <div className={classes.navbar}>
                <h1 className={classes.logo} onClick={handleHomeClick}>Fakegram</h1>
                <input type="text" className={classes.input_search} ref={inputSearchRef} placeholder="Busca" onKeyUp={handleSearchClick} />
                <div className={classes.buttons}>
                    <NavbarIcons user={user} option={option}/>
                    <NavbarButtonProfile imageProfile={user.imageProfile} option={option}/>
                </div>
            </div>
        </header>
    )
}
