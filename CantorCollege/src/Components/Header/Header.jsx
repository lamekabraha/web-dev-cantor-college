import styles from './Header.module.css';
import './../../App.css';
import { useState } from 'react';

const Header = ({ handleNav }) =>{
    const [menuOpen, setMenuOpen] = useState(false);

    const links = ['Home', 'Students', 'Staff', 'Business', 'Learning Resources', 'Contact Us'];

    return(
        <header className={styles.container}>
            <div className={styles.headerContainer}>
                <img className={styles.headerImg} src="./logo.png" alt="Cantor College logo" />   
                <h1 className={`${styles.headingTitle} heading`}>CANTOR COLLEGE</h1>
                <div className={styles.headerNavbar}>
                    {links.map((link) => (
                        <span key={link}>
                            <a href="#" onClick={(ev) => handleNav(ev, link)}>
                                {link}
                            </a>
                        </span>
                    ))}
                </div>
                <span className={styles.menuContainer}>
                    <button onClick={() => setMenuOpen(!menuOpen)} className={styles.menu}>Menu</button>
                </span>
            </div>
            {menuOpen && (
                <div className={styles.navbarContainer}>
                    {links.map((link) => (
                        <li key={link}>
                            <a href="#" onClick={(ev) => handleNav(ev, link)}>
                                {link}
                            </a>
                        </li>
                    ))}
                </div>
            )}
        </header>
    )
}

export default Header;