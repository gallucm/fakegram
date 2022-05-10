import './Footer.module.css';

export const Footer = (props) => {
    return (
        <>
            <footer>
                <h3>Fakegram 2021</h3>
            </footer>
            <main>{props.children}</main>
        </>
    )
}
