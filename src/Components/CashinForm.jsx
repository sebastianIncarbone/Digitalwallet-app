import React, {Component} from 'react';
import '../Styles/Cashin.sass';
import RadioCard from './RadioCard';
import cashinSchema from "../schemas/cashinSchema";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default class CashinForm extends Component {

    constructor(props){
        super(props);
    this.onlynumber = this.onlynumber.bind(this)
    this.onlyletters = this.onlyletters.bind(this)
    }

    onlynumber(e){ 
        var key = e.keyCode || e.which;
        if (key < 48 || key > 57) {
          e.preventDefault();
        }
    }

    onlyletters(e){
        let key = e.keyCode || e.which;
        let tecla = String.fromCharCode(key).toLowerCase();
        let letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
 
         if(letras.indexOf(tecla)==-1){
            e.preventDefault();
         }
    }

    render(){
        const { onChange, onChangeCard, onCancel, onSubmit, form } = this.props
        return(
            <div className="container box">
            <h3>Cash in</h3>
            <Formik  
                initialValues={{   
                    cardNumber:"",
                    name:"",
                }}
                validationSchema={cashinSchema} 
                onSubmit={onSubmit} 
            >
                {Formulario(onChange, onCancel, form, this.onlyletters, this.onlynumber)} 
            </Formik>
            </div>
        );
    }
}

function  Formulario(onChange, onCancel, form, onlyletters, onlynumber){
    return( 
        <Form >
            <div className="form-group">
                <label className="label">Amount</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="amount" 
                    aria-describedby="AmountField" 
                    placeholder="amount"
                    onKeyPress={onlynumber}
                    onChange={onChange}
                    value={form.amount}
                />
            </div>
            <RadioCard/>
            <div className="form-group">
                <label className="label">Card Number</label>
                <Field
                    type="text" 
                    className="form-control" 
                    name="cardNumber" 
                    placeholder="Enter card number"
                    maxLength="40"
                    onKeyPress={onlynumber}
                />
                <ErrorMessage
                    className="text-danger mx-auto"
                    component="div"
                    name="cardNumber"
                />
                <label className="label">Name</label>
                <Field 
                    type="text" 
                    className="form-control" 
                    name="name" 
                    placeholder="Enter name"
                    maxLength="40"
                    onKeyPress={onlyletters}
                />
                <ErrorMessage
                    className="text-danger mx-auto"
                    component="div"
                    name="name"
                />
            </div>
            <div>
            </div>
            <div>
                <input 
                    type="button"
                    className="btn btn-danger btn-lg btn-magin-left btn-space"
                    value="Cancel"
                    onClick={onCancel}
                />
                <input 
                    type="submit"
                    className="btn btn-success btn-lg btn-space"
                    value= "Confirm"
                />
            </div>
    </Form>
    );
}