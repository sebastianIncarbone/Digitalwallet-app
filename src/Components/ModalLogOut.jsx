import React, { Component } from "react";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom'; 



export default class ModalLogOut extends Component{    

    removeLocalStorage = () => (
        localStorage.clear()
        
    )

    openModal = () => {
    
           
            Swal.fire({
                title: 'Are you sure you want log out?',
                icon: 'question',
                confirmButtonText: 'Yes',
                showCancelButton: true,
                showCloseButton: true,
                preConfirm:this.removeLocalStorage,
                showConfirmButton: true,
                showLoaderOnConfirm: true
              },
        
            )
              
        }
        
    render() {
        return (<div >
                    <button type="button" onClick={this.openModal} class="btn btn-outline-secondary">
                            Log out   
                    </button>          
                </div>
                );
        }   
}

