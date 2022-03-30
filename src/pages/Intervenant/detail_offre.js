
import '../../css/detail_offre.css';
import '../../css/general.css'

function Detail_offre(props) {
    
    return (
           <div className="shadow">
                <div className="offre">
                    <div>
                    <h1 className="name">{props.OfferName}</h1>
                    </div>
                    <div className="border">

                    </div>
                    <div className="detail">
                            <div><h4>{props.type}</h4></div>
                            <div><h4>{props.duration}</h4></div>
                            <div><h4>{props.description}</h4></div>
                            <div><h4>{props.information}</h4></div>
                    </div>
                    <div className="btnArea">
                        <div><button className="button">{props.button}</button></div>
                </div>
                </div>
            </div>
    );
}

//Export
export function DetailOffre(props) {
        return (
            <div className="container">
                <Detail_offre OfferName="NOM DE L'OFFRE" type="TYPE DE CONTRAT" duration="DURÉE DU CONTRAT" description="DESCRIPTION DU POSTE" information="AUTRES INFORMATIONS" button="CANDIDATER"/>
            </div>
        )
}
