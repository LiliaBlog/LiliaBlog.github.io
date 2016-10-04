import React, { Component } from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import {} from './index.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Header from './header.jsx';
import Poster from './poster.jsx';
import MyPoster from './myPoster.jsx';

class App extends Component {
  componentDidMount() {
    var defaultHeight = $(window).innerHeight();
    render(<Poster />, document.getElementById('posterContainer'));
    $(window).on('navShop', function () {
      render(<Poster />, document.getElementById('posterContainer'));
    });
    $(window).on('navOutfits', function () {
      render(<MyPoster />, document.getElementById('posterContainer'));
    });
    $(window).scroll(() => {
      if ($(window).scrollTop() > defaultHeight / 2) {
        $('#backToTop').show();
      } else {
        $('#backToTop').hide();
      }
    });
    $('#backToTop').click(() => {
      $("html, body").animate({ scrollTop: 0 }, 300);
    });
  }
  render() {
    return (
      <div>
        <Header />
        <div id="posterContainer"></div>
        <div id="backToTop">
          <button>TOP</button>
        </div>
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));