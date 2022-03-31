import {Component} from 'react';
import '../../css/home_page_intervenant.css';
import {Menu_Intervenant} from '../../component/menu_intervenant'
import {Footer} from '../../component/footer'


// TODO
class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div className="card shadow"> 
                <div className="header-card">
                    <div>
                        <h3 className="name">{this.props.name}</h3>
                    </div>
                </div>
                <div className="border">

                </div>
                <div className="body-card"> 
                    <div><h4>{this.props.situation}</h4></div>
                    <div><h4>{this.props.duration}</h4></div>
                    <div><h4>{this.props.description}</h4></div>
                    <div><h4>{this.props.contract}</h4></div>
                </div>
                <div className="btnArea">
                    <div><button className="button">{this.props.btn}</button></div>
                </div>
            </div>
        )
    }
}


export class HomePageIntervenant extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div>
                    <Menu_Intervenant />
                    <div className="container">
                        <Card profilurl="#"  name="NOM DE L'OFFRE" contract="TYPE DE CONTRAT" duration="DURÉE DU CONTRAT" description="DESCRIPTION" btn="DETAIL DE L'OFFRE"/>
                        <Card profilurl="#"  name="NOM DE L'OFFRE" contract="TYPE DE CONTRAT" duration="DURÉE DU CONTRAT" description="DESCRIPTION" btn="DETAIL DE L'OFFRE"/>
                        <Card profilurl="#"  name="NOM DE L'OFFRE" contract="TYPE DE CONTRAT" duration="DURÉE DU CONTRAT" description="DESCRIPTION" btn="DETAIL DE L'OFFRE"/>
                        <Card profilurl="#"  name="NOM DE L'OFFRE" contract="TYPE DE CONTRAT" duration="DURÉE DU CONTRAT" description="DESCRIPTION" btn="DETAIL DE L'OFFRE"/>

                    </div>
                    <Footer />
                </div>

                  
        )
    }
}