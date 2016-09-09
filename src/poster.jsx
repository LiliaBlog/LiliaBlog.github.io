import React, { Component } from 'react';
import Article from './article.jsx';
import $ from 'jquery';

export default class Poster extends Component {
    constructor() {
        super();
        this.listNum = 10;
        this.articles = null;
        this.state = {
            loadArticles: []
        }
        $.getJSON("./posts/articles.json", (data) => {
            this.articles = data.articles;
            this.getList();
        });
        $('#app').scroll( () => {
            if ($('#app').scrollTop() + $('#app').innerHeight() >= ($('#app')[0].scrollHeight)) {
                this.listNum += 10;
                this.getList();
                console.log('new fetch')
            }
        });
    }

    render() {
        return (
            <div id="poster" className="container">
                {this.state.loadArticles.map( (a, i) => {
                    return (
                        <Article key={a.id} imgUrl={a.imgUrl} jumpUrl={a.jumpUrl}/>
                    );
                }) }
            </div>
        );
    }

    getList() {
        var tempArr = [];
        for (var i = 0; i < this.listNum; i++) {
            if (this.articles[i]) tempArr.push(this.articles[i]);
        }
        this.setState({ loadArticles: tempArr });
    }
}