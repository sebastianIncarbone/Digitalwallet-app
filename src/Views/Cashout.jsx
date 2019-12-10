import React, {Component} from 'react';
//import { getUser } from '../api/login.js';
import NavBar from '../Components/NavBar';
import '../Styles/Cashout.sass';
import '../Styles/Home.sass';


export default class CashinView extends Component {

    constructor(props){
        super(props);
        this.handleConfirm = this.handleConfirm.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleConfirm(){

    }

    handleCancel(){

    }

    componentWillMount(){

    }

    render(){
        return(       
            <div className="container">
                <div className="logo"></div>
                <NavBar></NavBar>
                <div className="box">
                    <form>
                        <h3>Transfer</h3>
                        <div className="form-group">
                            <label className="label" for="CVU">CVU</label>
                            <input 
                                type="cvu" 
                                className="form-control" 
                                id="cvu" 
                                placeholder="number cvu"
                            />
                        </div>
                        <div className="form-group">
                            <label className="label" for="AmountField">Amount</label>
                            <input 
                                type="cvu" 
                                className="form-control" 
                                id="amount" 
                                aria-describedby="AmountField" 
                                placeholder="amount"
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
            </div>
        );
    }
}