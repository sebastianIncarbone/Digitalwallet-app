import React, {Component} from 'react';
import { getUser } from '../api/login.js';
import Cashout from '../Styles/Cashout.sass'


export default class CashoutView extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount(){

    }

    render(){
        return( 
            <div className="container box">
            <form>
                <h3>Cash in</h3>
                <div className="form-group">
                    <label className="label" for="AmountField">Amount</label>
                    <input type="cvu" className="form-control" id="amount" aria-describedby="AmountField" placeholder="amount"/>
                </div>
                <div >
                    <input type="checkbox" className="form-check-input inputCheck" id="CheckCreditCard"/>
                    <label className="form-check-label labelCheck" for="CheckCreditCard">Credit card</label>
                    <input type="checkbox" className="form-check-input inputCheck" id="CheckDebitCard"/>
                    <label className="form-check-label labelCheck" for="CheckDebitCard">Debit card</label>
                </div>
                <div className="form-group">
                    <label className="label" for="CardNumber">Card Number</label>
                    <input type="cardNumber" className="form-control" id="CardNum" placeholder="number"/>
                    <label className="label" for="FullName">Full Name</label>
                    <input type="FullName" className="form-control" id="FullName" placeholder="Enter Full Name"/>
                </div>
                <div>

                </div>
                <div>
                    <button type="cancel" className="btn btn-danger btn-lg btn-magin-left btn-space">Cancel</button>
                    <button type="confirm" className="btn btn-success btn-lg btn-space">Confirm</button>
                </div>
            </form>
        </div>     
        );
    }
}