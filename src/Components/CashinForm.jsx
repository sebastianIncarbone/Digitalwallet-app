import React, {Component} from 'react';
import '../Styles/Cashin.sass';
import RadioCard from './RadioCard';

export default class CashinForm extends Component {

    constructor(props){
        super(props);
    this.handleCancel = this.handleCancel.bind(this)
    this.onlynumber = this.onlynumber.bind(this)
    this.onlyletters = this.onlyletters.bind(this)
    }

    handleCancel(e){
        e.preventDefault()
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
        const { onChange, onSubmit, form } = this.props
        return( 
            <div className="container box">
                <form onSubmit={onSubmit} ref="form">
                <h3>Cash in</h3>
                <div className="form-group">
                    <label className="label" for="AmountField">Amount</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="amount" 
                        aria-describedby="AmountField" 
                        placeholder="amount"
                        onKeyPress={this.onlynumber}
                        onChange={onChange}
                        value={form.amount}
                    />
                </div>
                <RadioCard/>
                <div className="form-group">
                    <label className="label" for="CardNumber">Card Number</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="cardNum" 
                        placeholder="number"
                        maxlength="16"
                        onKeyPress={this.onlynumber}
                        // onChange={onChange}
                        // value={form.cardNum}
                    />
                    <label className="label" for="FullName">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        placeholder="Enter name"
                        maxlength="40"
                        onKeyPress={this.onlyletters}
                        // onChange={onChange}
                        // value={form.name}
                    />
                </div>
                <div>
                </div>
                <div>
                    <input 
                        type="button"
                        className="btn btn-danger btn-lg btn-magin-left btn-space"
                        value="Cancel"
                        onClick={this.handleCancel}
                    />
                    <input 
                        type="submit"
                        className="btn btn-success btn-lg btn-space"
                        value= "Confirm"
                    />
                </div>
            </form>
            </div>
        );
    }
}