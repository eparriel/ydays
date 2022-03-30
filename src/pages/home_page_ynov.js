import {Component} from 'react';
import '../css/home_page-ynov.css';
import '../css/general.css';


// TODO
class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href={this.props.profilurl}><div className="card shadow">
                <div className="header-card">
                    <div><img className="profil-pic" src={this.props.pictureLink} alt="pdp"/></div>
                    <div>
                        <h3 className="name">{this.props.name}</h3>
                    </div>
                </div>
                <div className="border">

                </div>
                <div className="body-card">
                    <div><h4>{this.props.situation}</h4></div>
                    <div><h4>{this.props.motivation}</h4></div>
                    <div><h4>{this.props.description}</h4></div>
                </div>
            </div></a>
        )
    }
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