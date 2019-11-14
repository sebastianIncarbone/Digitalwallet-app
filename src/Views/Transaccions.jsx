import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Transaccions.sass';
import TableTransaccions from '../Components/TableTransaccions';

export default class Transaccions extends Component {

    render(){
        return(
            <TableTransaccions />
        );
    }
}