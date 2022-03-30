
import '../../css/poster_offre.css';
import logo from '../../assets/logo_ynovcampus/logo_ynov_campus.svg'

const PosterOffreArea = () => {
    return (
        <div className="shadow PosterOffreArea">
            <div className="logo">
                <img src={logo} alt="Logo Ynov Campus"/>
            </div>
            <div className="header-card">
                <p>Poster unen Offre d'emploi</p>
            </div>
            <form className="formConnexion" action="">
                <div className="textArea">
                    <p>Nom de l'offre</p><input id="name" type="text" />
                    <p>Type de contrat</p><input id="type" type="text" />
                    <p>Détail de l'offre</p><input id="detail" type="text" />
                </div>

                <div className="btnArea">
                    <div><button className="button">Poster</button></div>
                </div>
            </form>
        </div>
    )
}

export function PosterOffre () {
    return (
        <div>
            <PosterOffreArea />
            <div className="frise">
            </div>
        </div>
    )
}