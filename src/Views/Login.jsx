import React, { Component } from 'react';
import FromLogin from '../Components/FormLogin';
import '../Styles/loginPage.sass';

export default class LoginView extends Component {
    render() {
      return (
        <div className="login">
          <div className="background">
            <div className="corner">
              <div className="logo"></div>
              <div className="textoDeBienvenida">
                <p>
                  Wellcome back,
                </p>
                <p>
                  Login!
                </p>
              </div>
            </div>
            <div className="bubblesContainer">  
              <div className="bubbles"></div>
              <div className="bubbles"></div>
              <div className="bubbles"></div>
            </div>
          </div>
          <FromLogin className="formulario"/>
        </div>
      );
    }
}