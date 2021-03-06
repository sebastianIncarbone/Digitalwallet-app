import React, {Component} from 'react';
import NavBar from '../Components/NavBar';
import '../Styles/Home.sass';
import avatar from '../assets/empty_avatar.jpg';
import request from '../api/UserController'

export default class ProfileView extends Component {

  state={
    saldo:''
  }
  componentDidMount(){
    request('get', `account/${JSON.parse(localStorage.getItem('session')).CVU}`).then(res => {
        console.log(res)
    this.setState({saldo: res})
})
}

    render() {
        return (
        <div>
          <NavBar></NavBar>
          <div className="container emp-profile box">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img container">
                            <img  style={{ margin: '10px'}} src={avatar} className="rounded-circle" alt=" " width="128" height="128"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        
                                    </h5>
                                    <h6>
                                        
                                    </h6>
                                    <p className="proile-rating">My profile</p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                              <p>{JSON.parse(localStorage.getItem('session')).nombre}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                              <p>{JSON.parse(localStorage.getItem('session')).email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Credit card number</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{JSON.parse(localStorage.getItem('session')).tarjetaDeCredito}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Balance</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>${this.state.saldo}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>CVU</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{JSON.parse(localStorage.getItem('session')).CVU}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  </form>           
            </div>
        </div> 
        );
      }
}
