import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Skull from '../../assets/skull.png';
import './index.css'

function ErrorPage() {
    return (
        <div>
            <Header />
            <div className="error">
                <div className="not">
                    <img src={Skull} alt="/"></img>
                    <h1>404</h1>
                    <p>Not Found</p>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default ErrorPage;