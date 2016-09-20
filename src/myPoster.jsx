import React, { Component } from 'react';
import MyPost from './myPost.jsx';
import $ from 'jquery';
import uuid from 'uuid';

export default class Poster extends Component {
    constructor() {
        super();
        var scrollTriggered = false;
        this.listNum = 18;
        this.articles = null;
        this.state = {
            posts: null
        };
        $.getJSON("./posts/myPosts.json", (data) => {
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
            <div id="myPoster" className="container">
                {this.state.posts.map((a, i) => {
                    return (
                        <MyPost key={uuid.v1() } imgUrl={a.imgUrl} jumpUrl={a.jumpUrl} title={a.title} description={a.description}/>
                    );
                }) }
            </div>
        );
    }

    getList() {
        this.setState({
            posts: this.articles
        });
        return false;
    }
}