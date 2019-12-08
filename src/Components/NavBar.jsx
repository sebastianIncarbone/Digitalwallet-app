import React, { Component } from "react";
import ModalLogOut from '../Components/ModalLogOut';
import '../Styles/FormLogin.sass';



export default class NavBar extends Component{    

        
    render() {
        return (
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/cashin">Cash in</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cashout">Cash out</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profileview">Profile</a>
              </li>
              
              </ul>
              <ModalLogOut></ModalLogOut>
                
              </div>
            </nav>
            </div>
       );
    }   
}
