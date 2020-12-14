import React,{useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import disc from '../../data/disc.json';

import './index.css';

function LandingPage(){
    const [show, setShow] = useState(false);
    return(
        <div>
            <Header />
            <div className="content">
                <div className="page">
                    <div className="title">
                        <h1>TOM WAITS</h1>
                    </div>
                    <div className="buttom" onClick={() => setShow(!show)}>
                        <p>Conheça</p>
                    </div>
                    {show &&
                        <table className="list">
                            <thead>
                                <tr>
                                    <th className="align">Album</th>
                                    <th>Ano</th>
                                </tr>
                            </thead>
                            <tbody className="list">
                            {disc.map(item => <tr key={item.id} ><td className="align2">{item.title}</td><td>{item.year}</td></tr>)}
                                <td>And more...</td>
                            </tbody>
                       </table>  
                    } 
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default LandingPage;