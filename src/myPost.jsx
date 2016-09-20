import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class Article extends Component {
    constructor() {
        super();
        this.state = {
            animated: false
        }
    }

    render() {
        return (
            <div className="myPost" onMouseEnter={this.mouseEnter}>
                <a target="_blank" href={this.props.jumpUrl} className="img">
                    <img src={this.props.imgUrl} width="100%"/>
                </a>
            </div>
        );
    }
}