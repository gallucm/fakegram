import { useEffect, useState } from 'react';
import { Navbar } from '../components/ui/Navbar'
import { useProfile } from '../hooks/useProfile';
import { getLoginData } from '../services/utils'

export const Index = () => {

    const [load, setLoad] = useState(false);

    const [searchProfile] = useProfile();

    const userData = getLoginData();

    useEffect(() => {
        if (!load && userData) {
            setLoad(true);
            searchProfile(userData.uid);
        }
    }, [load, userData, searchProfile]);

    return (
        <Navbar>
            <div>
                {/* <h2>Main Page</h2> */}
                {/* Cargar al usuario */}
            </div>
        </Navbar>
    )
}
