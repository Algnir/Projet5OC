import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/Logo-header.svg';

function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo" className="header-logo" />
            <nav>
                <ul>
                    <li><NavLink to="/Accueil">Accueil</NavLink></li>
                    <li><NavLink to="/A-Propos">A Propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;