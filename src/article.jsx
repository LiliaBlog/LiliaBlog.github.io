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

    componentDidMount() {
        var dom = ReactDOM.findDOMNode(this);
        if (this.state.animated === false) {
            this.setState({ animated: true });
            $(dom).addClass('flipInX animated');
            $(dom).on('animaionend', () => {
                $(dom).removeClass('flipInX animated');
            });
        }
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