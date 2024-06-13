import React from 'react';
import logo from '../../assets/images/Logo-footer.svg';

function Footer() {
    return (
        <footer className="Footer">
            <img src={logo} alt="Logo" className="footer-logo" />
            <p>&copy; 2020 Kasa. All right reserved</p>
        </footer>
    );
}

export default Footer;
  