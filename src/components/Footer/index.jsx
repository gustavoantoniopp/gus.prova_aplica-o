import React from 'react';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Twitter from '../../assets/twitter.svg';
import './index.css';

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="contact">
                    <ul>
                        <h1>CONTATO</h1>
                        <li><strong>Email</strong> - gustavoantonio.pp@outlook.com</li>
                        <li><strong>FONE</strong> - (45) 99831-9274</li>
                        <li><strong>FONE</strong> - (45) 3573-1123</li>
                    </ul>
                </div>
                <div className="social">
                    <ul>
                        <a className="face" href="https://www.facebook.com/tomwaits" rel="noreferrer" target="_blank"><img src={Facebook} alt="/"></img></a>
                        <a className="insta" href="https://www.instagram.com/tomwaits/" rel="noreferrer" target="_blank"><img src={Instagram} alt="/"></img></a>
                        <a className="tt" href="https://twitter.com/tomwaits" rel="noreferrer" target="_blank"><img src={Twitter} alt="/"></img></a>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>© Copyright - Gustavo Antonio</p>
            </div>
        </div>
    );
}

export default Footer;