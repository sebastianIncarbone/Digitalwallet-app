import React, { Component } from 'react';
import { ReactComponent as NotFoundImage } from '../assets/404.svg';

export default class NotFound extends Component {
    render() {
      return (
        <div style={{maxHeight:`100vh`,overflow:"hidden"}} >
          <NotFoundImage />
        </div>
      );
    }
}