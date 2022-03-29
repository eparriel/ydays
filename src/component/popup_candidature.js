import {Component} from 'react';
import '../css/popup.css'
import '../css/general.css'

export function Popup( {closeModal}) {
    return (
        <div className="popup shadow">
            <h1>Test</h1>
            <button onClick={() => closeModal(false)}>close</button>
            <div className="background-popup" onClick={() => closeModal(false)}>

            </div>
        </div>
    )
}

// export class Popup extends Component {
//     render () {
//         return (
//             <div className="popup shadow">
//                 <div className="background">
//
//
//                 </div>
//             </div>
//
//         )
//     }
// }