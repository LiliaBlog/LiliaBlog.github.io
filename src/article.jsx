import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class Article extends Component {
    constructor() {
        super();
        this.state = {
            animated: false
        }
        this.mouseEnter = this.mouseEnter.bind(this);
    }

    render() {
        return (
            <div className="article" onMouseEnter={this.mouseEnter}>
                <a target="_blank" href={this.props.jumpUrl} className="img">
                    <img src={this.props.imgUrl} width="100%"/>
                </a>
            </div>
        );
    }

    mouseEnter(e) {
        // var dom = ReactDOM.findDOMNode(this);
        // $(dom).addClass('pulse animated');
        // $(dom).on('animationend', () => {
        //     $(dom).removeClass('pulse animated');
        // });
    }
}