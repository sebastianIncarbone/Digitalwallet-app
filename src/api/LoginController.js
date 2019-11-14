import axios from 'axios';

export default class LoginController {

    async loginUser(session) {
        const user = await axios('localhost:7000/login', { email: session.user, password: session.password} );
        localStorage.setItem('session', JSON.stringify(user));
    }
    
    register(session) {        
        //let user = await axios('localhost:7000/login', { user: session.user, password: session.password} );
        localStorage.setItem('session', JSON.stringify(session));
    }   

    forgetPassword(session) {
        //let user = await axios('localhost:7000/login', { user: session.user, password: session.password} );
    }
    
    logoutUser() {
        localStorage.clear();
    }

}