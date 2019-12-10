import React, {Component} from 'react';
import NavBar from '../Components/NavBar';
import '../Styles/Home.sass';

export default class ProfileView extends Component {

    render(){
        return(
        <div className="container">
            <NavBar></NavBar>
        </div>
        );
    }
}