import React, {Component} from 'react';
import NavBar from './NavBar';
import '../Styles/RadioCard.sass';


export default class RadioCard extends Component {
    render(){
        return(
        <div >
            <input 
                type="radio" 
                className="form-check-input inputCheck" 
                name="radio"
                checked 
            />
            <label className="form-check-label labelCheck" for="CheckCreditCard">Credit card</label>
            <input 
                type="radio" 
                className="form-check-input inputCheck" 
                name="radio" 
            />
            <label className="form-check-label labelCheck" for="CheckDebitCard">Debit card</label>
        </div>    

        );
    }
}