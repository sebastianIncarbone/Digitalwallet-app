import axios from 'axios';

export default class CashController {
    
    constructor(){
        this.url = 'http://localhost:7000';
        this.URLTransfer = this.url + '/transfer';
        this.URLCashin = this.url + '/cashIn';
        
    }

    transfer() {
      return this.URLTransfer;
    }
    
    cashin() {
      return this.URLCashin;
    }
    
}