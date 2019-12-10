import React, {Component} from 'react';
//import { getUser } from '../api/login.js';
import NavBar from '../Components/NavBar';
import CashinForm from '../Components/CashinForm'
import '../Styles/Cashin.sass';
import '../Styles/Home.sass';


export default class CashinView extends Component {

    constructor(props){
        super(props);
        this.state = {
            form:{
                amount:''
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
                <CashinForm 
                    onChange={this.handleChage}
                    form={this.state.form}
                />
            </div>
        );
    }
}