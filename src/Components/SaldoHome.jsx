import React, { Component } from "react";
import '../Styles/FormLogin.sass';

import UserController from '../api/UserController'



export default class SaldoHome extends Component{    
    constructor(props){
        super(props);
        this.state = { session: localStorage.session,
                       saldo: ''
        }
    }

    componentDidMount(){
        this.setState({saldo:this.handleSaldo()})
    }
    handleSaldo = () => {
        const userController = new UserController();
        //return(userController.getSaldo(JSON.parse(localStorage.getItem('session')).CVU))
    }
        
    render() {
        return (
            <div className="container">
                <nav className="border-top">
        <h1 className="navbar-brand">Saldo: $ {this.state.saldo}</h1>
                </nav>
            </div>
            );
        }   
    }
