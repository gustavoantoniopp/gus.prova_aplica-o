import React from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './index.css';

function Header() {
    return (
        <div className="header">
            <Link to="/" className="logo"><img src={Logo} alt="logo"></img></Link>
            <ul className="opts">
                <a href="https://pt.wikipedia.org/wiki/Tom_Waits" rel="noreferrer" target="_blank">
                    <li>Sobre</li>
                </a>
                <a href="https://pt.wikipedia.org/wiki/Tom_Waits" rel="noreferrer" target="_blank">
                    <li>Discográfia</li>
                </a>
                <li>Shows</li>
                <Link to="/Newsletter">
                    <li>News</li>
                </Link>
            </ul>
        </div>
    );
}

export default Header;   