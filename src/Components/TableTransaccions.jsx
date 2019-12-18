import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/TableTransaccions.sass';
import request from '../api/UserController'


export default class TableTransaccions extends Component {

    constructor(props){
        super(props);
        this.state = { transaccions: sessionStorage.cvu};
    }

    componentDidMount(){
        request('get', `transaccions/${JSON.parse(localStorage.getItem('session')).CVU}`).then(res => {
            console.log(res + "asdasdasd")
		    this.setState({transaccions: res})
        })
    }

    fieldsColumn(fecha, content, price){
        return(
            <tr>
                <td className='text-center'>{fecha}</td>
                <td className='text-center'>{content}</td>
                <td className='text-center precio'>{price}</td>
            </tr>
        );
    }

    generatorColumns(){
        let user = this.state.transaccions;
        return(
                this.fieldsColumn(user.nat, user.gender, user.email)
            );
        // let user;
        // for(let i=0; i < 10; i++ ){
        //     user = users['i'];
        //     column += this.fieldsColumn(user.name.last, user.gender, user.email);
        // }
    }

    render(){
        return(
        <div className="container flex">
            <h5>Historial</h5>
            <table className="table table-dark">
                <tbody>
                   {this.generatorColumns()}
                </tbody>
            </table>
        </div>
        );
    }
}