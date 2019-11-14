import React, {Component} from 'react';
import SaldoHome from '../Components/SaldoHome';
import ModalLogOut from '../Components/ModalLogOut';
import NavBar from '../Components/NavBar';
import TransfersTable from '../Components/TransfersTable';
import '../Styles/Home.sass';


export default class HomeView extends Component {
    constructor(props) {
      super(props);
      
      this.state = {isToggleOn: true,
                    modal:false};
  
      this.handleClick = this.handleClick.bind(this);

    }
  
    handleClick() {
    }

    //returnModal = () => {
    //  console.log("asd");
    //  return(<div class="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    //           <div class="modal-dialog modal-sm">
    //              <div class="modal-content">
    //                <button>Yes</button>
    //                <button>No</button>
    //              </div>
    //            </div>
    //          </div>)
    //  }
          
  
    render() {
      return (
              <div className ="container"> 
                <div className="float-lg-right">
                  
                <ModalLogOut></ModalLogOut>
                
                </div>
    
                <div className="logo"></div>
                     <NavBar></NavBar>
                     <SaldoHome></SaldoHome>
                     <TransfersTable></TransfersTable>
              </div>              
        );
      }
}