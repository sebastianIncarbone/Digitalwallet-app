import React, {Component} from 'react';

export default class HomeView extends Component {
    constructor(props) {
      super(props);
      
      this.state = {isToggleOn: true};
  
      this.handleClick = this.handleClick.bind(this);

    }
  
    handleClick() {
    }
  
    render() {
      return (
        <h1>Wellcome! </h1>
      );
    }
  }