import React, {Component} from 'react';
//import { getUser } from '../api/login.js';
import '../Styles/Cashin.sass';
import RadioCard from './RadioCard';

export default class CashoutForm extends Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        // this.onlynumber = this.onlynumber.bind(this)
        // this.onlyletters = this.onlyletters.bind(this)
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

    handleSubmit(e){
        e.preventDefault() 
    }

    handleCancel(){

    }

    componentWillMount(){

    }

    render(){
        const { onChange, form } = this.props
        return(       
            <div className="container box">
                <form onSubmit={this.handleSubmit}>
                    <h3>Transfer</h3>
                    <div className="form-group">
                        <label className="label" for="CVU">CVU</label>
                        <input 
                            type="cvu" 
                            className="form-control" 
                            name="cvu" 
                            placeholder="number cvu"
                            maxlength="22"
                            onKeyPress={this.onlynumber}
                            onChange={onChange}
                            value={form.cvu}
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" for="AmountField">Amount</label>
                        <input 
                            type="cvu" 
                            className="form-control" 
                            name="amount" 
                            aria-describedby="AmountField" 
                            placeholder="amount"
                            onKeyPress={this.onlynumber}
                            onChange={onChange}
                            value={form.amount}
                        />
                    </div>
                    <div>
                        <button 
                            type="cancel" 
                            className="btn btn-danger btn-lg btn-magin-left btn-space" 
                            onClick={this.handleCancel}>
                                Cancel
                        </button>
                        <button 
                            type="confirm" 
                            className="btn btn-success btn-lg btn-space"
                            onClick={this.handleConfirm}>
                                Confirm
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}