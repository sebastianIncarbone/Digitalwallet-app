import React, {Component} from 'react';
import CashController from '../api/CashController.js';
import NavBar from '../Components/NavBar';
import CashinForm from '../Components/CashinForm'
import axios from 'axios';
import Swal from 'sweetalert2';
import '../Styles/Cashin.sass';
import '../Styles/Home.sass';
import request from '../api/UserController'

export default class CashinView extends Component {

    constructor(props){
        super(props);
        this.state = {
            form:{
                cvuFROM:"",
                cvuTO: JSON.parse(localStorage.getItem('session')).CVU,                
                amount: 0
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeCard = this.handleChangeCard.bind(this)
    }

    handleChangeCard(e){
        request('get', 'cvuByCard/' + e.target.value).then(res => {
            this.setState({
                form:{
                    ...this.state.form,
                    cvuFROM: res
                }
            })
        })  
    }

    handleChange(e){
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleCancel(e){
        e.preventDefault()
        this.props.history.push('/')
    }

    handleSubmit(e){
        const cashController = new CashController()
        this.setState({
            loading:true
        })
        axios.post(cashController.cashin(), this.state.form)
        .then( response =>{
            console.log(response.data);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your money has been sent successfully',
                showConfirmButton: false,
                timer: 1500
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

    render(){
        return( 
            <div className="container">
                <NavBar/>
                <CashinForm 
                    onChange={this.handleChange}
                    onChangeCard={this.handleChangeCard}
                    onCancel={this.handleCancel}
                    onSubmit={this.handleSubmit}
                    form={this.state.form}
                />
            </div>
        );
    }
}