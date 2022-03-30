import {Component} from 'react';
import '../css/connexion.css';
import '../css/general.css'
import logo from '../assets/logo_ynovcampus/logo_ynov_campus.svg'

const ConnexionArea = () => {
    return (
        <div className="shadow connexionArea">
            <div className="logo">
                <img src={logo} alt="Logo Ynov Campus"/>
            </div>
            <form className="formConnexion" action="">
                <div className="textArea">
                    <input id="email" type="text" placeholder="Adresse mail"/>
                    <input id="password" type="password" placeholder="Mot de passe"/>
                </div>

                <div className="btnArea">
                    <div><button className="button">CONNEXION</button></div>
                    <div><p>ou</p></div>
                    <div><button className="button">CREER TON COMPTE</button></div>


                </div>
            </form>
        </div>
    )
}

export function Connexion () {
    return (
        <div>
            <ConnexionArea />
            <div className="frise">
            </div>
        </div>
    )
}