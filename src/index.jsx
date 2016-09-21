import React, { Component } from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Header from './header.jsx';
import Poster from './poster.jsx';
import MyPoster from './myPoster.jsx';

class App extends Component {
  componentDidMount(){
    $(window).on('navShop', function(){
        $('#poster').show();
        $('#myPoster').hide();
    });
    $(window).on('navOutfits', function(){
        $('#poster').hide();
        $('#myPoster').show();
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Poster />
        <MyPoster />
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));