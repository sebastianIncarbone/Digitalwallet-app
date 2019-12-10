import axios from 'axios';

export default class CashController {
    
    constructor(){
        this.url = 'http://localhost:7000';
        this.URLTransfer = this.url + '/transfer';
        this.URLCashin = this.url + '/cashin';
        
    }

    transfer(cvu, amount) {
        return axios.post(this.URLTransactions)
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