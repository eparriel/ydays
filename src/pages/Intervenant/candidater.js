
import '../../css/candidater.css';
import logo from '../../assets/logo_ynovcampus/logo_ynov_campus.svg'

export const CandidaterArea = () => {
    return (
        <div className="shadow CandidaterArea">
            <div className="logo">
                <img src={logo} alt="Logo Ynov Campus"/>
            </div>
            <div className="header-card">
                <p>Candidater</p>
            </div>
            <form className="formConnexion" action="">
                <div className="textArea">
                    <p>Nom de l'offre</p><input id="name" type="text" />
                    <p>Motivation détaillée</p><input id="motivation" type="text" />
                </div>
                <div className="btnArea">
                    <div><button className="button">Candidater</button></div>
                </div>
            </form>
        </div>
    )
}

function Candidater () {
    return (
        <div>
            <CandidaterArea />
            <div className="frise">
            </div>
        </div>
    )
}