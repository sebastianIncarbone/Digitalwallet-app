import axios from 'axios';

export default class LoginController {
    constructor(){
        this.url = 'http://localhost:7000';
    }
    loginUser(session) {
        return axios.post(this.url + '/login', { mail: session.email, password: session.password} )
            .then(response=> localStorage.setItem('session', JSON.stringify(response.data)))
        //const response = await ;
        
    }
    
    async register(session) {   
        const usuarioHardCodeado = {
            "tarjetaDeCredito": "0123456789",
            "nombre": "sebastian",
            "apellido": "incarbone",
            "mail": "sebastianincarbonew@gmail.com",
            "password": "seba",
            "esAdmin": true,
            "cvu": null
        };
        const response = await axios.post(this.url + '/register', usuarioHardCodeado );
        localStorage.setItem('session', JSON.stringify(response.data));
    }   

    forgetPassword(session) {
        //let user = await axios('localhost:7000/login', { user: session.user, password: session.password} );
    }
    
    logoutUser() {
        localStorage.clear();
    }

}