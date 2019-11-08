import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginView from './Views/Login';
import CashinView from './Views/Cashin';
import CashoutView from './Views/Cashout';
import ProfileView from './Views/Profile';
import RegisterView from './Views/Register';
import HomeView from './Views/home';
import NotFound from './Views/NotFound';
import './App.scss';

export default class App extends Component {
  
  state = { user: null }
  
  componentDidMount() {

    let session = localStorage.getItem('session');
    
    if (session) {
      this.setState({user: JSON.parse(session)});
    }

  }

  render(){
    console.log(this.state.user);
    return (
      <Router>
        <Switch>
          {
            user? 
            <> 
              <Route path="/cashin" component={CashinView} />
              <Route path="/cashout" component={CashoutView} />
              <Route path="/profileview" component={ProfileView} />
              <Route path="/profileview/edit" component={ProfileView} />
              <Route path="/register" component={RegisterView} />
              <Route exact path="/" component={HoginView} /> 
            </>
            :
            <>
              <Route exact path="*" component={LoginView} /> 
            </>
         }
         <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
