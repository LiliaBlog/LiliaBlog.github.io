import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class MyPost extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="myPost">
                <a target="_blank" href={this.props.jumpUrl} className="img">
                    <img src={this.props.imgUrl} width="100%" height="100%"/>
                </a>
                <div className="postTitile">{this.props.title}</div>
            </div>
        );
    }
}