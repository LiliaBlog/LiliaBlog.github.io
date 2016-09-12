import React, { Component } from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {} from 'animate.css/animate.css';
import Header from './header.jsx';
import Poster from './poster.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Poster />
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));