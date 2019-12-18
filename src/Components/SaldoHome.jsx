import React, { Component } from "react";
import '../Styles/FormLogin.sass';
import request from '../api/UserController'

export default class SaldoHome extends Component{    
    constructor(props){
        super(props);
        this.state = { session: localStorage.session,
                       saldo: ''
        }
    }

    componentDidMount(){
        request('get', `account/${JSON.parse(localStorage.getItem('session')).CVU}`).then(res => {
            console.log(res)
		    this.setState({saldo: res})
    })
}
    handleSaldo = () => {
        
        
    }
        
    render() {
        return (
            <div className="container">
                <nav className="border-top">
        <h1 className="navbar-brand">Balance: $ {this.state.saldo}</h1>
                </nav>
            </div>
            );
        }   
    }
