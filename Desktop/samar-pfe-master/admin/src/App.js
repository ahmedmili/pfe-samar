// import logo from './logo.svg';
import './App.css';
// import Footer from './components/footer';
// import AsideMenu from './components/AsideMenu';
// import NavBar from './components/Navbar';
// import HedaerBloc from './components/Header';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/Home';
import AuthPage from './pages/Auth';
// import CreateAccountPage from './pages/create-account';
import ClientsPage from './pages/clients';
import AddNewClient from './pages/add-client';
import PartnersPage from './pages/Partners-page';
import DemandePartnersPage from './pages/Partners-demande-page';
import AddNewPartnerPage from './pages/add-partner';
 
export default class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div >

        <Router>
          <Switch>
            <Route path="/" component={ HomePage } exact/>
            <Route path="/auth" component={ AuthPage } exact/>
            
            
            <Route path="/clients" component={ ClientsPage } exact/>
            <Route path="/clients/add" component={ AddNewClient } exact/>
           

            <Route path="/partners" component={ PartnersPage } exact/>
            <Route path="/partners_demande" component={ DemandePartnersPage } exact/>
            <Route path="/partners/add" component={ AddNewPartnerPage } exact/>
           

            
           
            
            
            
          </Switch>
        </Router>
      </div>

    );
  }


}


