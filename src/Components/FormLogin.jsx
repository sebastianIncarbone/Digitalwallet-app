import React, { Component } from "react";
import { Link } from 'react-router-dom'; 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import LoginSchema from "../schemas/loginSchema";
import '../Styles/loginForm.sass';

export default class FormLogin extends Component{    

    handleSubmit(values) {
        localStorage.setItem('session', JSON.stringify(values));
    }
    
    render() {
        return(
            <div className="formularioLogin">
                <Formik  initialValues={{email:"", password:""}} validationSchema={LoginSchema} onSubmit={this.handleSubmit} >
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
                type="email"
                name="email"
                placeholder="Enter email"
            />
            <ErrorMessage
                component="div"
                name="email"
            />

            <label >Password</label>
            <Field
                type="password"
                name="password"
                placeholder="Enter password"
            />
            <ErrorMessage
                component="div"
                name="password"
            />

            <Link to="/" className="register">
            Register
            </Link>


            <button
                type="submit"
            >
            Sing-in
            </button>

            <Link to="/">
            forgot your password?
            </Link>

        </Form>
    );
}