import React, {useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './index.css';

function LandingPage() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [data, setData] = useState("");
    const [info, setInfo] = useState(false)

    function handleSubmit(event) {
        const dataInfo = {
            nome: nome,
            email: email,
            phone: phone,
            data: data,
            info: info,
        }

        console.log(dataInfo)
        event.preventDefault();
    }
    return (
        <div>
            <Header />
                <div className="pageNews">
                    <div className="title">
                        <p>Receba Notícias</p>
                    </div>
                    <div className="listItems">
                        <form onSubmit={handleSubmit}>
                            <label className="text">
                                <input onChange={event => setNome(event.target.value)} type="text" placeholder="Nome" value={nome} />
                            </label>
                            <label className="text">
                                <input onChange={event => setEmail(event.target.value)} type="email" placeholder="Email" value={email} />
                            </label>
                            <label className="text">
                                <input onChange={event => setPhone(event.target.value)} type="tell" placeholder="Telefone" value={phone} />
                            </label>
                            <label className="text">
                                <input onChange={event => setData(event.target.value)} type="date" placeholder="Data de Nascimento" value={data} />
                            </label>
                            <div>
                                <label className="checkbox">
                                    <input onChange={event => setInfo(event.target.value)} className="checkItem" type="checkbox" value={!info} />
                                    <label>Confirmar ?</label>
                                </label>
                            </div>
                            <input className="buttomItem" type="submit" value="Enviar" />
                        </form>
                    </div>
                </div>
            <Footer />
        </div>
    )
}
export default LandingPage;