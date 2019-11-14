import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/TableTransaccions.sass';
import { getUser } from '../api/login.js';


export default class TableTransaccions extends Component {

    constructor(props){
        super(props);
        this.state = { transaccions: []};
    }

    componentWillMount(){
        getUser.then(result => {
            this.setState({ transaccions : result.results['0'] });
            console.log(result.results['0']);
        }).catch(e => {this.setState({ error: e.message })})

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