import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

function Header() {
    return (
        <header>
            <Link to='/'>
            <div className="logo">
                <img src="../img/logo.png" alt="Jonnie Lil Music Playlist" />
            </div>
            </Link>
            <Form />
        </header>
    );
}

export default Header;