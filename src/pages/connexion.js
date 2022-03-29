import {Component} from 'react';
import './connexion.css';

class ConnexionArea extends Component {
    render() {
        return (
            <div className="shadow connexionArea">
                <div className='logo'>
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
}

export class Connexion extends Component {
    render () {
        return (
            <div>
                <ConnexionArea />
                <div className="frise">
                </div>
            </div>
        )
    }
}