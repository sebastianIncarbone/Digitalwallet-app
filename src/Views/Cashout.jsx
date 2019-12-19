import React, {Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import CashController from '../api/CashController.js';
import NavBar from '../Components/NavBar';
import CashoutForm from '../Components/CashoutForm'
import '../Styles/Cashout.sass';
import '../Styles/Home.sass';


export default class CashoutView extends Component {

    constructor(props){
        super(props);
        this.state = {
            form:{
                cvuFROM:JSON.parse(localStorage.getItem('session')).CVU,
                cvuTO: "",                
                amount: 0
            }
        }
        this.handleChage = this.handleChage.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleCancel(e){
        e.preventDefault()
        this.props.history.push('/')
    }
    
    handleChage(e){
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form)
    }

    validinputs(){
        return this.state.form.amount > 0 && this.state.form.cvuTO.trim().length > 0
    }


    handleSubmit(e){
        const cashController = new CashController()
        e.preventDefault()
        if(this.validinputs()){
        axios.post(cashController.transfer(), this.state.form)
        .then( response =>{
            console.log(response.data);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your money has been successfully charged',
                showConfirmButton: false,
                timer: 2000
            })
            this.props.history.push('/')
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid fields',
              })
        }
    }

    render(){
        return(       
            <div className="container">
                <NavBar/>
                <CashoutForm
                    onChange={this.handleChage}
                    onCancel={this.handleCancel}
                    onSubmit={this.handleSubmit}
                    form={this.state.form}
                />
            </div>
        );
    }
}