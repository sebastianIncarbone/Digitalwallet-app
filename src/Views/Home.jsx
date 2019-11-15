import React, {Component} from 'react';
import SaldoHome from '../Components/SaldoHome';
import NavBar from '../Components/NavBar';
import '../Styles/Home.sass';
import TransfersTable from '../Components/TransfersTable';

export default class HomeView extends Component {      
   render() {
      return (
              <div className ="container">    
                <div className="logo"></div>
                <NavBar></NavBar>
                <SaldoHome></SaldoHome>
                <TransfersTable></TransfersTable>
              </div>              
        );
      }
}
