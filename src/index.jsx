import React, { Component } from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import jQuery from 'jquery';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Header from './header.jsx';

class App extends Component {
  constructor() {
    super();
    var template = '<div class="article"><a target="_blank" href="%%" class="img"><img src="##" width="100%"/></a><div class="title"></div><div class="dscpt"></div></div>'
    $.getJSON("./posts/articles.json", function (data) {
      data.articles.forEach(function (a) {
        var temp = template.replace('%%', a.jumpUrl);
        temp = temp.replace('##', a.imgUrl);
        $('#poster').append($(temp));
      });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div id="poster" className="container"></div>
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));