import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class MyPost extends Component {
    hoverEnter() {
        if (this.article !== null) {
            TweenMax.to(this.article, 0.7, { scale: 1.03, transformOrigin: 'center' });
        }
    }
    hoverLeave() {
        if (this.article !== null) {
            TweenMax.to(this.article, 0.7, { scale: 1, transformOrigin: 'center' });
        }
    }
    render() {
        return (
            <div className="myPost" onMouseEnter={this.hoverEnter.bind(this)} onMouseLeave={this.hoverLeave.bind(this)}>
                <a target="_blank" href={this.props.jumpUrl} className="img">
                    <img src={this.props.imgUrl} width="100%" ref={(ref) => this.article = ref} />
                </a>
                <div className="postTitile">{this.props.title}</div>
                {this.getLinks.bind(this)()}
                <div style={{ clear: 'both' }}></div>
            </div>
        );
    }
    getLinks() {
        let arr = [];
        if (this.props.links) {
            this.props.links.map((a, i) => {
                arr.push(<div className="postText"><span>{a.name}</span>: <a href={a.link}> link </a>&nbsp;| </div>);
            })
        }
        return arr;
    }
}