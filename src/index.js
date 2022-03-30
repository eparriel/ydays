import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// import {HomePageYnov} from './pages/home_page_ynov';
// import {Connexion} from "./pages/connexion";
import {Candidature} from "./pages/mes_candidatures";
import {Connexion} from "./pages/connexion";
import {Profile} from "./pages/profile";
import {HomePageYnov} from "./pages/home_page_ynov";
import {Popup} from "./component/popup_candidature";
import {HomePageIntervenant} from "./pages/home_page_intervenant";
import {PosterOffre} from "./pages/poster_offre";
import {Candidater} from "./pages/candidater";

ReactDOM.render(
  <React.StrictMode>
      <Connexion/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
