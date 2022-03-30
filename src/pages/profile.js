
import '../css/profile.css';
import logo from '../assets/logo_ynovcampus/logo_ynov_campus.svg'

const ProfileArea = () => {
    return (
        <div className="shadow ProfileArea">
            <div className="logo">
                <img src={logo} alt="Logo Ynov Campus"/>
            </div>
            <form className="formConnexion" action="">
                <div className="textArea">
                    <input id="firstname" type="text" placeholder="Prénom"/>
                    <input id="name" type="text" placeholder="Nom"/>
                    <input id="email" type="text" placeholder="Adresse mail"/>
                    <input id="password" type="password" placeholder="Mot de passe"/>
                    <input id="confirmation_password" type="password" placeholder="confirmation"/>
                </div>

                <div className="btnArea">
                    <div><button className="button">CONNEXION</button></div>
                </div>
            </form>
        </div>
    )
}

export function Profile () {
    return (
        <div>
            <ProfileArea />
            <div className="frise">
            </div>
        </div>
    )
}