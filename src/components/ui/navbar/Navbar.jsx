import React from 'react';
import { useSelector } from 'react-redux';
import { Loading } from '../loading/Loading';
import { MainNavigation } from './main/MainNavigation';

export const Navbar = (props) => {

    const { user } = useSelector(state => state.auth);

    const childrenWithProps = React.Children.map(props.children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { userProp: user});
        }
        return child;
    });

    if (!user) {
        return <Loading size='large' />
    }

    return (
        <>
            <MainNavigation user={user} />
            <main>
                {childrenWithProps} 
            </main>
        </>
    )
}
