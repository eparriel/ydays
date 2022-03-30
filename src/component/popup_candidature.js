import {Component} from 'react';
import '../css/popup.css'
import '../css/general.css'

export function Popup( {closeModal}) {
    return (
        <div>
            <div className="background-popup" onClick={() => closeModal(false)}>

            </div>
            <div className="popup shadow">
                <h1>Test</h1>
                <button onClick={() => closeModal(false)}>close</button>

            </div>
        </div>

    )
}