import React, { Component } from "react";
import { Link } from 'react-router-dom'; 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PassSchema from "../schemas/passSchema";
import LoginController from '../api/LoginController';
import Swal from 'sweetalert2';
import '../Styles/FormForgetPassword.sass';


export default class FormForgotPassword extends Component{    
    constructor(props){
        super(props);
    }

    handleSubmit = (email) => {
        const loginController = new LoginController();
        loginController.forgetPassword(email)
            .then((response) => {
                console.log(response);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Su contraseña es',
                    showConfirmButton: false,
                    timer: 1000
                }).then( () => this.props.history.push('/'));
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'User not found',
                    text: err
                });
            })
    }
    
    

    render() {
        return(
            <div className="formularioDePassword">
                <h1> Forgot password </h1>
                <Formik  initialValues={{ email:'' }} validationSchema={PassSchema} onSubmit={this.handleSubmit} >
                    { Formulario } 
                </Formik>
            </div>
        );
    }   
}

function Formulario({ touched, errors }) {
    return(
        <Form className="bodyFormularioDePassword">
            <label >Email</label>
            <Field
                className="form-control"
                type="email"
                name="email"
                placeholder="Enter email"
            />
            <ErrorMessage
                className="text-danger mx-auto"
                component="div"
                name="email"
            />

            <Link to="/register" className="register btn btn-outline-primary">
                Register
            </Link>
            
            <button
                type="submit"
                className="btn btn-light"
            >
                Get
            </button>

            <Link to="/" className="linkToGetMyPass mx-auto">
                Login
            </Link>
        </Form>
    );
}