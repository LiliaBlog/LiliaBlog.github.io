import React, { Component } from 'react';
import Article from './article.jsx';
import $ from 'jquery';
import uuid from 'uuid';

export default class Poster extends Component {
    constructor() {
        super();
        var scrollTriggered = false;
        this.listNum = 18;
        this.articles = null;
        this.state = {
            colume_1: [],
            colume_2: [],
            colume_3: []
        }
        $.getJSON("./posts/articles.json", (data) => {
            this.articles = data.articles;
            this.getList();
        });
        $(window).scroll(() => {
            if ($(window).scrollTop() + $(window).innerHeight() >= $(document).height() / 1.3 && !scrollTriggered) {
                scrollTriggered = true;
                if (this.listNum <= this.articles.length) {
                    this.listNum += 18;
                    scrollTriggered = this.getList();
                }
                else {
                    scrollTriggered = false;
                }
            }
        });
    }

    render() {
        return (
            <div id="poster" className="container">
                <div id="colume1">
                    {this.state.colume_1.map((a, i) => {
                        return (
                            <Article key={uuid.v1() } imgUrl={a.imgUrl} jumpUrl={a.jumpUrl} title={a.title} description={a.description}/>
                        );
                    }) }
                </div>
                <div id="colume2">
                    {this.state.colume_2.map((a, i) => {
                        return (
                            <Article key={uuid.v1() } imgUrl={a.imgUrl} jumpUrl={a.jumpUrl} title={a.title} description={a.description}/>
                        );
                    }) }
                </div>
                <div id="colume3">
                    {this.state.colume_3.map((a, i) => {
                        return (
                            <Article key={uuid.v1() } imgUrl={a.imgUrl} jumpUrl={a.jumpUrl} title={a.title} description={a.description}/>
                        );
                    }) }
                </div>
            </div>
        );
    }

    getList() {
        var c1 = [];
        var c2 = [];
        var c3 = [];

        if (this.articles[0]) c1.push(this.articles[0]);
        if (this.articles[1]) c2.push(this.articles[1]);
        if (this.articles[2]) c3.push(this.articles[2]);

        for (var i = 3; i < this.listNum; i++) {
            if (this.articles[i]) {
                switch (i % 3) {
                    case 0:
                        c1.push(this.articles[i]);
                        break;
                    case 1:
                        c2.push(this.articles[i]);
                        break;
                    case 2:
                        c3.push(this.articles[i]);
                        break;
                }
            }
        }

        this.setState({
            colume_1: c1,
            colume_2: c2,
            colume_3: c3
        });

        return false;
    }
}