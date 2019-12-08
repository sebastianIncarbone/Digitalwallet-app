import axios from 'axios';

export default class UserController {
    
    constructor(){
        this.url = 'http://localhost:7000';
        this.URLTransactions = this.url + '/transaccions/';
        this.URLAccount = this.url + '/account/';
        
    }

    getTransactions(cvu) {
        return axios.get(this.URLTransactions + cvu)
                .then( response => console.log(response.data))
                .catch(e=>{
                    console.log(e)
                })
    }
    
    async getSaldo(cvu) {
        return axios.get(this.URLAccount + cvu)
                .then(result => {
                    return new Promise(resolve => {
                      setTimeout(() => {
                        resolve(result);
                      }, 500);
                    });
                  })
                  .then(function (response) {
                    console.log(response.data);
                    return(response.data)
                  });
              };
    
}