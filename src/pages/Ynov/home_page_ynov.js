import {Component, useState} from 'react';
import '../../css/home_page-ynov.css';
import {Popup} from "../../component/popup_candidature";
import {Candidature_detail} from "./candidature_pop-up_2";


// TODO
function Card(props) {

    const [openModal, setOpenModal] = useState(false);

    const changeModal = () => {
        setOpenModal(!openModal);
    }

    return (
        <div>
            <a href={props.profilurl}><div className="card shadow" onClick={changeModal}>
                <div className="header-card">
                    <div><img className="profil-pic" src={props.pictureLink} alt="pdp"/></div>
                    <div>
                        <h3 className="name">{props.name}</h3>
                    </div>
                </div>
                <div className="border">

                </div>
                <div className="body-card">
                    <div><h4>{props.situation}</h4></div>
                    <div><h4>{props.motivation}</h4></div>
                    <div><h4>{props.description}</h4></div>
                </div>
            </div></a>
            { openModal && <Popup contain={<Candidature_detail pictureLink="https://thispersondoesnotexist.com/image" surname="Nom" firstname="Prénom" age="Âge" situation="SITUATION PROFFESSIONNELLE" competence="COMPÉTENCES" description="DESCRIPTION DU POSTE" motivation="MOTIVATION DÉTAILLÉE" />} closeModal={changeModal} />}

        </div>

    )
}


export class HomePageYnov extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Card profilurl="#" pictureLink="https://thispersondoesnotexist.com/image" name="Nom Prénom" situation="test" motivation="motivation" description="description" />
                <Card profilurl="#" pictureLink="https://thispersondoesnotexist.com/image" name="Nom Prénom" situation="test" motivation="motivation" description="description" />
                <Card profilurl="#" pictureLink="https://thispersondoesnotexist.com/image" name="Nom Prénom" situation="test" motivation="motivation" description="description" />
                <Card profilurl="#" pictureLink="https://thispersondoesnotexist.com/image" name="Nom Prénom" situation="test" motivation="motivation" description="description" />
            </div>
        )
    }
}