
import '../../css/candidature_detail_2.css';
import '../../css/general.css'

function Candidature_detail(props) {
    
    return (
           <div className="card shadow">
                    <div className="header-card">
                        <div><img className="profil-pic" src={props.pictureLink} alt="pdp"/></div>              
                        <div><h3 className="firstname">{props.firstname}</h3></div>
                        <div><h3 className="surname">{props.surname}</h3></div>
                        <div><h3 className="age">{props.age}</h3> </div>
                    </div>
                    
                    <div className="detail_candidature">
                            <div><h4>{props.situation}</h4></div>
                            <div><h4>{props.competence}</h4></div>
                            <div><h4>{props.description}</h4></div>        
                            <div><h4>{props.motivation}</h4></div>                        
                    </div>
         </div>
    );
}

//Export
export function Candidature_pop_up(props) {
        return (
            <div className="candidature_pop_up_2">
                <Candidature_detail pictureLink="https://thispersondoesnotexist.com/image" surname="Nom" firstname="Prénom" age="Âge" situation="SITUATION PROFFESSIONNELLE" competence="COMPÉTENCES" description="DESCRIPTION DU POSTE" motivation="MOTIVATION DÉTAILLÉE"/>
            </div>
        )
}
