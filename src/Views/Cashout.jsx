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
                cvu:'',
                amount: 0
            }
        }
        this.handleChage = this.handleChage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChage(e){
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit(e){
        const cashController = new CashController()
        this.setState({
            loading:true
        })
        e.preventDefault()
        console.log(this.state.form)
        axios.post(cashController.transfer(), this.state.form)
        .then( response =>{
            console.log(response.data);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your money has been successfully charged',
                showConfirmButton: false,
                timer: 1500
            })
            this.props.history.push('/home')
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
                <CashoutForm
                    onChange={this.handleChage}
                    onSubmit={this.handleSubmit}
                    form={this.state.form}
                />
            </div>
        );
    }
}