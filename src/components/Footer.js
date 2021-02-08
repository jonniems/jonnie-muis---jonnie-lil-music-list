import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <Link to='/about'>
                About Me
            </Link>
        </footer>
    );

}

export default Footer;