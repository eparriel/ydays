import {Component} from 'react';
import {Footer} from "../../component/footer";
import {Menu} from '../../component/menu'
import '../../css/general.css';
import '../../css/mes_candidature.css';

function Card(props) {
    return (
        <div className="card-candidature shadow">
            <div className="body-card-candidate">
                <div><p className="name">{props.name}</p></div>
                <div><p className="name">{props.type}</p></div>
                <div><p className="name">{props.duration}</p></div>
                <div><p className="name">{props.description}</p></div>
            </div>
            <div className="btnArea">
                <button className="button">DETAILS</button>
            </div>
        </div>
    )
}


export class MesCandidature extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Menu menu={[{link: "#", name: "HOME PAGE"}, {link: "#", name: "CANDIDATURES ENREGISTRÉES"}, {link: "#", name: "POSTER UNE OFFRE"}, {link: "#", name: "TCHATER"}]} />

                <div className="frise">

                </div>
                <div className="body-candidatures">
                    <Card  name="NOM DU POSTE" type="TYPE DE CONTRAT" description="DESCRIPTION DU POSTE" duration="DURÉE DU CONTRAT" btn="DETAILS"/>
                    <Card  name="NOM DU POSTE" type="TYPE DE CONTRAT" description="DESCRIPTION DU POSTE" duration="DURÉE DU CONTRAT" btn="DETAILS"/>
                    <Card  name="NOM DU POSTE" type="TYPE DE CONTRAT" description="DESCRIPTION DU POSTE" duration="DURÉE DU CONTRAT" btn="DETAILS"/>
                    <Card  name="NOM DU POSTE" type="TYPE DE CONTRAT" description="DESCRIPTION DU POSTE" duration="DURÉE DU CONTRAT" btn="DETAILS"/>
                    <Card  name="NOM DU POSTE" type="TYPE DE CONTRAT" description="DESCRIPTION DU POSTE" duration="DURÉE DU CONTRAT" btn="DETAILS"/>
                </div>

                <Footer />
            </div>

                  
        )
    }
}