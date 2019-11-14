import React, { Component } from "react";
import { Link } from 'react-router-dom'; 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import LoginSchema from "../schemas/loginSchema";
import '../Styles/FormLogin.sass';
import Session from '../model/Session';
import LoginController from '../api/LoginController';

export default class FromRegister extends Component{    

    handleSubmit(session) {
        const loginController = new LoginController();
        loginController.register(session);
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

            <button
                type="submit"
                className="btn btn-light"
            >
            Sing-in
            </button>

        </Form>
    );
}