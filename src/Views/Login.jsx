import React, { Component } from 'react';
import FromLogin from '../Components/FormLogin';

export default class LoginView extends Component {
    render() {
      return (
        <div>
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
            <div className="bubblesGrande"></div>
            <div className="bubblesMediana"></div>
            <div className="bubblesChica"></div>
          </div>
          <FromLogin />
        </div>
      );
    }
}