import React, {Component} from 'react';
import NavBar from './NavBar';
import '../Styles/RadioCard.sass';


export default class RadioCard extends Component {

    constructor(props){
        super(props);
        // this.state = {
        //     radio: false
        // }
    }

    onRadioChange(e){
        // this.setState({
        //     [e.target.name]: e.target.cheked
        // })
    }

    render(){
        return(
        <div >
            <input 
                type="radio" 
                className="form-check-input inputCheck" 
                name="radio" 
               // checked={this.state.creditCard} 
                // onChange={this.onRadioChange}
            />
            <label className="form-check-label labelCheck" for="CheckCreditCard">Credit card</label>
            <input 
                type="radio" 
                className="form-check-input inputCheck" 
                name="radio" 
                //checked={this.state.debitCard} 
                // onChange={this.onRadioChange}
            />
            <label className="form-check-label labelCheck" for="CheckDebitCard">Debit card</label>
        </div>    

        );
    }
}