import {Component} from 'react';
import {Menu} from '../../component/menu'
import {Footer} from '../../component/footer'
import {useState} from "react";
import {Popup} from "../../component/popup_candidature";
import '../../css/home_page_ynov-1.css';
import '../../css/general.css'
import message from '../../assets/message.png';
import discuss from '../../assets/discuss.png';


function Card(props) {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="card-candidate shadow" onClick={() => {
            setOpenModal(true)
        }}>
            <div className="left-part">
                <img src={props.pdp} alt="profil"/>
            </div>
            <div className="right-part">
                <div>
                    <h1>{props.lastName + " " + props.firstName}</h1>
                </div>
                <div className="logo">
                    <div>
                        <a href="#">
                            <img src={message} alt="messages"/>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={discuss} alt="discussion"/>
                        </a>
                    </div>

                </div>
            </div>
            { openModal && <Popup closeModal={setOpenModal} />}
        </div>
    )
}

export class Candidature extends Component {
    render() {
        return (
            <div>
                <Menu /*active="Candidature"*/ menu={[{link: "#", name: "HOME PAGE"}, {link: "#", name: "CANDIDATURES ENREGISTRÉES"}, {link: "#", name: "POSTER UNE OFFRE"}, {link: "#", name: "TCHATER"}]} />
                <div className="contain">
                    <Card pdp="https://thispersondoesnotexist.com/image" firstName="Prénom" lastName="Nom"/>
                    <Card pdp="https://thispersondoesnotexist.com/image" firstName="Prénom" lastName="Nom"/>
                    <Card pdp="https://thispersondoesnotexist.com/image" firstName="Prénom" lastName="Nom"/>
                    <Card pdp="https://thispersondoesnotexist.com/image" firstName="Prénom" lastName="Nom"/>
                    <Card pdp="https://thispersondoesnotexist.com/image" firstName="Prénom" lastName="Nom"/>
                </div>

                <div className="frise">
                </div>
                <Footer />
            </div>
        )
    }
}