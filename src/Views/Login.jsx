import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import FormLogin from '../Components/FormLogin';
import FormPass from '../Components/FormForgotPass';
import FormRegister from '../Components/FormRegister';
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
            <Switch>
              <Route path="/register" component={FormRegister} />
              <Route path="/forgetPassword" component={FormPass} />
              <Route path="/" component={FormLogin} />
            </Switch>
          </div>
        </div>
      );
    }
}