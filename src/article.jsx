import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {TweenMax} from 'gsap';

export default class Article extends Component {
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
            <div className="article" onMouseEnter={this.hoverEnter.bind(this) } onMouseLeave={this.hoverLeave.bind(this) }>
                <a target="_blank" href={this.props.jumpUrl} className="img">
                    <img src={this.props.imgUrl} width="100%" ref={(ref) => this.article = ref}/>
                </a>
            </div>
        );
    }
}