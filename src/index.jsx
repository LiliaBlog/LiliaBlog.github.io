import React, { Component } from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Header from './header.jsx';
import Poster from './poster.jsx';
import MyPoster from './myPoster.jsx';

class App extends Component {
  componentDidMount() {
    $(window).on('navShop', function () {
      $('#poster').fadeIn(500);
      $('#myPoster').hide();
    });
    $(window).on('navOutfits', function () {
      $('#poster').hide();
      $('#myPoster').fadeIn(500);
    });
    $(window).scroll(()=>{
      if ($(window).scrollTop() > $(window).innerHeight() / 2){
        $('#backToTop').show();
      } else {
        $('#backToTop').hide();
      }
    });
    $('#backToTop').click(()=>{
      $("html, body").animate({scrollTop: 0}, 300);
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Poster />
        <MyPoster />
        <div id="backToTop">
          <button>TOP</button>
        </div>
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));