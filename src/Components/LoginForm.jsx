import React, { Component } from "react";
import { Link } from 'react-router-dom'; 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import LoginSchema from "../schemas/loginSchema";
import Session from "../model/Session";
import LoginController from '../api/LoginController';
import '../Styles/FormLogin.sass';
import Swal from 'sweetalert2';


export default class FormLogin extends Component{    
    constructor(props){
        super(props);
    }

    handleSubmit = (session) => {
        const loginController = new LoginController();
        loginController.loginUser(session).then(() => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login successful',
                showConfirmButton: false,
                timer: 1000
            })
            this.props.history.push('/')
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
            <div className="formularioLogin">
                <h1> Login </h1>
                <Formik  initialValues={new Session("","")} validationSchema={LoginSchema} onSubmit={this.handleSubmit} >
                    { Formulario } 
                </Formik>
            </div>
        );
    }   
}

function Formulario({ touched, errors }) {
    return(
        <Form className="bodyFormularioDeIngreso">
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

            <label >Password</label>
            <Field
                className="form-control"
                type="password"
                name="password"
                placeholder="Enter password"
            />
            <ErrorMessage
                className="text-danger mx-auto"
                component="div"
                name="password"
            />

            <Link to="/register" className="register btn btn-outline-primary">
            Register
            </Link>

            <button
                type="submit"
                className="btn btn-light"
            >
            Sing-in
            </button>

            <Link to="/forgotPass" className="linkToGetMyPass mx-auto">
            forgot your password?
            </Link>

        </Form>
    );
}