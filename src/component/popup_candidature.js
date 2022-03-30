import '../css/popup.css';
import '../css/general.css';
import close from '../assets/close.png';

export function Popup( props) {
    return (
        <div>
            <div className="background-popup">
                <div className="popup shadow">

                    <button className="closeModalBtn" onClick={() => props.closeModal}>
                        <img src={close} alt="close button"/>
                    </button>

                </div>
            </div>

        </div>

    )
}