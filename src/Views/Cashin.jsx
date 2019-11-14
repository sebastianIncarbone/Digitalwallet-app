import React, {Component} from 'react';
import { getUser } from '../api/login.js';
import Cashin from '../Styles/Cashin.sass'


export default class CashinView extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount(){

    }

    render(){
        return(       
            <div className="container box">
            <form>
                <h3>Transfer</h3>
                <div className="form-group">
                    <label className="label" for="CVU">CVU</label>
                    <input type="cvu" className="form-control" id="cvu" placeholder="number cvu"/>
                </div>
                <div className="form-group">
                    <label className="label" for="AmountField">Amount</label>
                    <input type="cvu" className="form-control" id="amount" aria-describedby="AmountField" placeholder="amount"/>
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