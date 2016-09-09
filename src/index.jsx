import React, { Component } from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import jQuery from 'jquery';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor() {
    super();
    this.subscribe = this.subscribe.bind(this);
  }
  subscribe() {
    alert();
  }
  render() {
    return (
      <header>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">Lilia Beauty Blog</a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a onClick={this.subscribe}>Subscribe</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
render(<App />, document.getElementById('app'));