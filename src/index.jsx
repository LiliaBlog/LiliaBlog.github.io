import React, { Component } from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import jQuery from 'jquery';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return <p> Hello World</p>;
  }
}

render(<App />, document.getElementById('app'));