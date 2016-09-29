import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {TimelineMax} from 'gsap';

export default class Article extends Component {
    hover() {
        if (this.article !== null) {
            var timeline = new TimelineMax();
            timeline.to(this.article, 0.7, { scale: 1.03, transformOrigin: 'center' })
                .to(this.article, 0.7, { scale: 1, transformOrigin: 'center' });
        }
    }
    render() {
        return (
            <div className="article" onMouseEnter={this.hover.bind(this) }>
                <a target="_blank" href={this.props.jumpUrl} className="img">
                    <img src={this.props.imgUrl} width="100%" ref={(ref) => this.article = ref}/>
                </a>
            </div>
        );
    }
}