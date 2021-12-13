import { useSelector } from 'react-redux';
import { Alert } from '../ui/Alert';
import { AuthForm } from './AuthForm';
import classes from './AuthSection.module.css';
import { LinkSection } from './LinkSection';

export const AuthSection = () => {
    const { message, error, loading } = useSelector(state => state.ui);

    return (
        <section className={classes.auth_section}>
            <h1>Fakegram</h1>

            <AuthForm />

            <LinkSection />

            {loading && <div className="loader mini" style={{ marginBottom: '1rem' }}></div>}

            {!loading && !error && message && <Alert message={message} />}

            {!loading && error && <Alert isError={true} message={error} />}
        </section>
    )
}
