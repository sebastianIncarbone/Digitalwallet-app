import React, {Component} from 'react';
//import { getUser } from '../api/login.js';
import NavBar from '../Components/NavBar';
import '../Styles/Cashin.sass';
import '../Styles/Home.sass';
import RadioCard from '../Components/RadioCard';


export default class CashoutView extends Component {

    constructor(props){
        super(props);
        this.state = {
            radio: false
        }
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.onlynumber = this.onlynumber.bind(this)
    }

    handleConfirm(){

    }

    handleCancel(){

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
    

    componentWillMount(){

    }

    render(){
        return( 
            <div className="container">
                <div className="logo"></div>
                <NavBar></NavBar>
            <div className="box">
                <form>
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
                    />
                </div>
                <RadioCard/>
                <div className="form-group">
                    <label className="label" for="CardNumber">Card Number</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="CardNum" 
                        placeholder="number"
                        maxlength="16"
                        onKeyPress={this.onlynumber}
                    />
                    <label className="label" for="FullName">Full Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="FullName" 
                        placeholder="Enter Full Name"
                        maxlength="40"
                        onKeyPress={this.onlyletters}
                    />
                </div>
                <div>

                </div>
                <div>
                    <button 
                        type="cancel" 
                        className="btn btn-danger btn-lg btn-magin-left btn-space">
                            Cancel
                    </button>
                    <button 
                        type="confirm" 
                        className="btn btn-success btn-lg btn-space">
                            Confirm
                    </button>
                </div>
            </form>
            </div>
            </div>
        );
    }
}