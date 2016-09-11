import React, { Component } from 'react';
import Article from './article.jsx';
import $ from 'jquery';

export default class Poster extends Component {
    constructor() {
        super();
        this.listNum = 30;
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
        $('#app').scroll(() => {
            if ($('#app').scrollTop() + $('#app').innerHeight() >= ($('#app')[0].scrollHeight)) {
                this.listNum += 30;
                this.getList();
                console.log('new fetch')
            }
        });
    }

    render() {
        return (
            <div id="poster" className="container">
                <div id="colume1">
                    {this.state.colume_1.map((a, i) => {
                        return (
                            <Article key={a.id} imgUrl={a.imgUrl} jumpUrl={a.jumpUrl} title={a.title} description={a.description}/>
                        );
                    }) }
                </div>
                <div id="colume2">
                    {this.state.colume_2.map((a, i) => {
                        return (
                            <Article key={a.id} imgUrl={a.imgUrl} jumpUrl={a.jumpUrl} title={a.title} description={a.description}/>
                        );
                    }) }
                </div>
                <div id="colume3">
                    {this.state.colume_3.map((a, i) => {
                        return (
                            <Article key={a.id} imgUrl={a.imgUrl} jumpUrl={a.jumpUrl} title={a.title} description={a.description}/>
                        );
                    }) }
                </div>
                <div sytle="float: none"></div>
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
        console.log(c1, c2, c3);
        this.setState({
            colume_1: c1,
            colume_2: c2,
            colume_3: c3
        });
    }
}