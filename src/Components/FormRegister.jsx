import React, { Component } from "react";
import { Link } from 'react-router-dom'; 
import { Formik, Form, Field } from 'formik';
import RegisterSchema from "../schemas/registerSchema";
import Session from '../model/Session';
import LoginController from '../api/LoginController';
import Swal from 'sweetalert2';
import '../Styles/FormRegister.sass';

export default class FromRegister extends Component{    
    constructor(props){
        super(props);
    }

    handleSubmit = (session) => {
        const loginController = new LoginController();
        loginController.register(session)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Register successful',
                    showConfirmButton: false,
                    timer: 1000
                }).then(() => this.props.history.push('/'));
            })
            .catch(err => {

                Swal.fire({
                    icon: 'error',
                    title: 'Register error',
                    text: err.response.data
                });
            
            });
    }
    
    render() {
        return(
            <div className="formularioRegister">
                <h2> Register </h2>
                <Formik  
                    initialValues={new Session("","","","","","","")} 
                    validationSchema={RegisterSchema} 
                    onSubmit={this.handleSubmit} 
                >
                    { Formulario } 
                </Formik>
            </div>
        );
    }   
}

function Formulario({ errors, touched }) {
    return(
        <Form className="bodyFormularioDeRegister">

            <label >Email</label>
            <Field
                className="form-control"
                type="email"
                name="email"
                placeholder="Enter email"
                style={styleError(errors, touched,'email')}
                />

            <label>Password</label>
            <Field
                className="form-control"
                type="password"
                name="password"
                placeholder="Enter password"
                style={styleError(errors, touched,'password')}
            />

            <label>Card</label>
            <Field
                className="form-control"
                type="text"
                name="tarjetaDeCredito"
                placeholder="Enter your number card"
                style={styleError(errors, touched,'tarjetaDeCredito')}
            />

            <label>Name</label>
            <Field
                className="form-control"
                type="text"
                name="nombre"
                placeholder="Enter your Name"
                style={styleError(errors, touched,'nombre')}
            />

            <label>Lastname</label>
            <Field
                className="form-control"
                type="text"
                name="apellido"
                placeholder="Enter your Lastname"
                style={styleError(errors, touched,'apellido')}
            />
            
            <button
                type="submit"
                className="btn btn-light register"
                style={styleSuccesfull(errors)}
            >
            Register
            </button>
            
            <Link to="/" className="linkToGetMyPass mx-auto">
                Login
            </Link>
       
        </Form>
    );
}

function styleError(errors, touched, on) {
    return errors[on] && touched[on] ? { borderColor: 'red'} : null;
}

function styleSuccesfull(errors) {
    return Object.keys(errors).length === 0 ? { borderColor: 'green'}: null;
}
