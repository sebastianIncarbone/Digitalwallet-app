import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FromLogin from '../Components/LoginForm';
import FromForgotPass from '../Components/ForgotPassForm';
import FromRegiter from '../Components/RegisterForm';
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
          <div className="formulario">
            <Route path="/ForgotPass" component={FromForgotPass} />
            <Route path="/Register" exact component={FromRegiter} /> 
            <Route component={FromLogin} />
          </div>
        </div>
      );
    }
}