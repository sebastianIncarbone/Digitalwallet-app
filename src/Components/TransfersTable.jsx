import React, { Component } from "react";
import request from '../api/UserController'


export default class NavBar extends Component{  
  constructor(props){
    super(props);
    this.state = { session: localStorage.session,
                   transaccions: []
    }
}

componentDidMount(){
  request('get', `transaccions/${JSON.parse(localStorage.getItem('session')).CVU}`).then(res => {
      this.setState({transaccions : res})
  })
}



  translate = (price) => (price < 0) ? 
                          <span className="text-danger">-${Math.abs(price)} </span> : 
                          <span className="text-success">${price}</span>
                          
  

  
        
    render() {
      
      console.log(this.state.transaccions)
        return (
          
          
         <div className="container">
           <div>History</div>
          
          <table className="table border rounded">
          
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.state.transaccions.length > 0 ? (
            this.state.transaccions.map(transaction => (
             <tr key={transaction.nano}>
              <td>{`${transaction.dateTime.dayOfMonth}/
              ${transaction.dateTime.monthValue}/
              ${transaction.dateTime.year}`} </td>
              <td>{transaction.description}</td>
              <td>{this.translate(transaction.amount)}</td>
            </tr>
            ))
          ) : (
             <tr>
              <td colSpan={3}>No hay transacciones</td>
             </tr>
             
          ) }
          </tbody> 
        </table>
        </div> 
        );
    }  

}
