import axios from 'axios';

export default class LoginController {
    
    constructor(){
        this.url = 'http://localhost:7000';
        this.URLlogin = this.url + '/login';
        this.URLregister = this.url + '/register';
        this.URLforgetPass = this.url + '/forgetPass';
    }

    loginUser(session) {
        return axios.post(this.URLlogin, session)
                .then( response => localStorage.setItem('session', JSON.stringify(response.data)));
    }
    
    register(session) { 
        return axios.post(this.URLregister, session )
            .then( response => localStorage.setItem('session', JSON.stringify(response.data)));
    }   

    forgetPassword(mail) {
        return axios.get(this.URLforgetPass + "/" + mail );
    }
    
    logoutUser() {
        localStorage.clear();
    }

}