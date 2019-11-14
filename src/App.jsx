import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginView from './Views/Login';
import CashinView from './Views/Cashin';
import CashoutView from './Views/Cashout';
import ProfileView from './Views/Profile';
import HomeView from './Views/Home';
import NotFound from './Views/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = { 
      user: null 
    }

  }
  
  componentDidMount() {

    let session = localStorage.getItem('session');
    
    if (session) {
      this.setState({user: JSON.parse(session)});
    }
  }

  render(){
    
    return (
      <Router>
        <Switch>
          {
            this.state.user? 
              <> 
                <Route path="/cashin" component={CashinView} />
                <Route path="/cashout" component={CashoutView} />
                <Route path="/profileview" component={ProfileView} />
                <Route path="/profileview/edit" component={ProfileView} />
<<<<<<< HEAD
                <Route path="/" component={HomeView} /> 
                <Route component={NotFound} />
=======
                <Route path="/register" component={RegisterView} />
                <Route path="/" exact component={HomeView} /> 
                {/*<Route path="*"component={NotFound} />*/}
>>>>>>> 2b1639c32792083bb7d2a7d9d661266e78422def
              </>
            :
              <LoginView/>
          }
        </Switch>
      </Router>
    );
  }
}
