import React, {Component} from 'react';
//import { getUser } from '../api/login.js';
import NavBar from '../Components/NavBar';
import CashoutForm from '../Components/CashoutForm'
import '../Styles/Cashout.sass';
import '../Styles/Home.sass';


export default class CashoutView extends Component {

    constructor(props){
        super(props);
        this.state = {
            form:{
                cvu: '',
                amount: ''
            }
        }
        this.handleChage = this.handleChage.bind(this)
    }

    handleChage(e){
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render(){
        return(       
            <div className="container">
                <NavBar/>
                <CashoutForm
                    onChange={this.handleChage}
                    form={this.state.form}
                />
            </div>
        );
    }
}