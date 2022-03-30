import {Component} from 'react';
import '../../css/mes_candidature.css';
import {Footer} from "../../component/footer";
import {Menu} from '../../component/menu'

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (         
                <div className="card shadow"> 
                    <div className="body-card"> 
                        <div><h4 className="name">{this.props.name}</h4></div>
                        <div><h4 className="name">{this.props.type}</h4></div>
                        <div><h4 className="name">{this.props.duration}</h4></div>
                        <div><h4 className="name">{this.props.description}</h4></div>
                    </div>
                    <div className="btnArea">
                        <div><button className="button">{this.props.btn}</button></div>
                    </div>
                </div>
        )
    }
}


export class MesCandidature extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Menu menu={[{link: "#", name: "HOME PAGE"}, {link: "#", name: "CANDIDATURES ENREGISTRÉES"}, {link: "#", name: "POSTER UNE OFFRE"}, {link: "#", name: "TCHATER"}]} />

                <div className="container">
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