import {Component} from 'react';
import '../css/menu.css';
import logo from '../assets/logo_ynovcampus/logo_ynov_campus.svg'

//TODO

export class Menu extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <nav>
                <ul>
                    {this.props.menu.map(x => <li><a href= {x.link.toString()}>{x.name.toString()}</a></li>)}
                </ul>

                <div className="div-logo">
                    <div>
                        <img className="logo" src={logo} alt="LOGO"/>
                    </div>
                        {/*<h2>{window.innerWidth < 1135 ? this.props.active : "" }</h2>*/}
                </div>
            </nav>
        )
    }
}