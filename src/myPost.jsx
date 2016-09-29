import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class MyPost extends Component {
    hover() {
        if (this.article !== null) {
            var timeline = new TimelineMax();
            timeline.to(this.article, 0.7, { scale: 1.02, transformOrigin: 'center' })
                .to(this.article, 0.7, { scale: 1, transformOrigin: 'center' });
        }
    }
    render() {
        return (
            <div className="myPost" onMouseEnter={this.hover.bind(this) }>
                <a target="_blank" href={this.props.jumpUrl} className="img">
                    <img src={this.props.imgUrl} width="100%" height="100%" ref={(ref) => this.article = ref}/>
                </a>
                <div className="postTitile">{this.props.title}</div>
            </div>
        );
    }
}