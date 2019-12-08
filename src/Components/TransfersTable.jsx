import React, { Component } from "react";
import { getTransaccions } from "../api/login";



export default class NavBar extends Component{  
  constructor(props){
    super(props);
    this.state = { session: localStorage.session,
                  transactions: getTransaccions(JSON.parse(localStorage.getItem('session')).CVU)};
}



  translate = (price) => (price < 0) ? 
                          <td className="text-danger">-${Math.abs(price)} </td> : 
                          <td className="text-success">${price  }</td>
                          
  

  
        
    render() {
      
      console.log(this.state)
        return (
          
          
         <div className="container">
           <div class>Historial</div>
          
          <table className="table border rounded">
          
          <thead>
            <tr>
              <th scope="col">Fecha</th>
              <th scope="col">Descripción</th>
              <th scope="col">Dinero {this.session}</th>
            </tr>
          </thead>
          <tbody>
            {this.state.transactions > 0 ? (
            this.state.transactions.map(transaction => (
             <tr key={transaction.id}>
              <td>{transaction.fecha}</td>
              <td>{transaction.description}</td>
              <td>{this.translate(transaction.monto)}</td>
            {/*
              <th scope="row">21/10/2019</th>
              <td>Pago en mercadolibre</td>
              
              {this.translate(-100)}}
              
            </tr>
            <tr>
              <th scope="row">29/10/2019</th>
              <td>Pago de haberes</td>
              {this.translate(42000)}
              */}
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
