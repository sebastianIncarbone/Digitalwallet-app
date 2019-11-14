import React, { Component } from "react";


export default class NavBar extends Component{    

  translate = (price) => (price < 0) ? 
                          <td className="text-danger">-${Math.abs(price)} </td> : 
                          <td className="text-success">${price }</td>
  

  
        
    render() {
        return (
         <div className="container">
          <table className="table">
          
          <thead>
            <tr>
              <th scope="col">Fecha</th>
              <th scope="col">Descripción</th>
              <th scope="col">Dinero</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">21/10/2019</th>
              <td>Pago en mercadolibre</td>
              {this.translate(-100)}
              
            </tr>
            <tr>
              <th scope="row">29/10/2019</th>
              <td>Pago de haberes</td>
              {this.translate(42000)}
            </tr>
            
          </tbody>
        </table>
        </div>   
        );
    }  
}
