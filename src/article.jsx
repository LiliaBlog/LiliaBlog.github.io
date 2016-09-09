import React, { Component } from 'react';

export default class Article extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="article">
                <a target="_blank" href={this.props.jumpUrl} className="img">
                    <img src={this.props.imgUrl} width="100%"/>
                </a>
            </div>
        );
    };
}