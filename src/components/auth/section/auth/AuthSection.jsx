import { useSelector } from 'react-redux';
import { Alert } from '../../../ui/alert/Alert';
import { AuthForm } from '../../form/AuthForm';
import { LinkSection } from '../links/LinkSection';

import classes from './AuthSection.module.css';

export const AuthSection = () => {
    const { message, error, loading } = useSelector(state => state.ui);

    return (
        <section className={classes.auth_section}>
            <h1>Fakegram</h1>

            <AuthForm />

            <LinkSection />

            {!loading && !error && message && <Alert message={message} />}

            {!loading && error && <Alert isError={true} message={error} />}
        </section>
    )
}
