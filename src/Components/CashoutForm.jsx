import React, {Component} from 'react';
import '../Styles/Cashin.sass';

export default class CashoutForm extends Component {

    constructor(props){
        super(props);
    this.onlynumber = this.onlynumber.bind(this)
    }

    onlynumber(e){ 
        var key = e.keyCode || e.which;
        if (key < 48 || key > 57) {
          e.preventDefault();
        }
    }

    render(){
        const { onChange, onCancel, onSubmit, form } = this.props
        return(
            <div className="container box">
            <h3>Transfer</h3>
            <form onSubmit={onSubmit}>
            <div className="form-group">
                <label className="label">CVU</label>
                <input
                    type="text" 
                    className="form-control" 
                    name="cvuTO" 
                    placeholder="number cvu"
                    maxLength="22"
                    onKeyPress={this.onlynumber}
                    onChange={onChange}
                    value={form.cvuTO}
                />
            </div>
            <div className="form-group">
                <label className="label">Amount</label>
                <input
                    type="number"
                    min="0" 
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
            </form>
            </div>
        );
    }
}
