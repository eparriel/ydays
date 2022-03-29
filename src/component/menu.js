import {Component} from 'react';
import '../css/menu.css';
import logo from '../assets/logo_ynovcampus/logo_ynov_campus.svg'

//TODO

export class Menu extends Component {

    render () {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <a href="#">HOME PAGE</a>
                    <a href="#">CANDIDATURES ENREGISTRÉES</a>
                    <a href="#">POSTER UNE OFFRE</a>
                    <a href="#">TCHATER</a>
                </div>
            </div>
        )
    }
}