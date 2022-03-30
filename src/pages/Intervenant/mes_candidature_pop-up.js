
import '../../css/mes_candidature_pop-up.css';
import '../../css/general.css'

function MesCandidature_detail(props) {
    
    return (
           <div className="card shadow">
                    <div className="header-card">
                        <div><img className="profil-pic" src={props.pictureLink} alt="pdp"/></div>              
                        <div> <h3 className="firstname">{props.firstname}</h3> </div>
                        <div> <h3 className="surname">{props.surname}</h3> </div>
                        <div> <h3 className="age">{props.age}</h3> </div>
                        <div> <h3 className="offer_name">Candidature au poste de : {props.offer_name}</h3> </div>
                    </div>
                    
                    <div className="detail">
                            <div><h4>{props.description}</h4></div>
                            <div><h4>{props.situation}</h4></div>
                            <div><h4>{props.motivation}</h4></div>
                            <div><h4>{props.competence}</h4></div>
                    </div>
                    <div className="btnArea">
                        <div><button className="button">{props.button}</button></div>
                </div>
         </div>
    );
}

//Export
export function MesCandidature_pop_up(props) {
        return (
            <div className="candidature_pop_up">
                <MesCandidature_detail pictureLink="https://thispersondoesnotexist.com/image" surname="Nom" firstname="Prénom" age="Âge" offer_name=" " description="DESCRIPTION DU POSTE" situation="SITUATION PROFFESSIONNELLE" motivation="MOTIVATION DÉTAILLÉE" competence="COMPÉTENCES" button="ENREGISTRER"/>
            </div>
        )
}
