import React, { Component } from 'react';

export default class Header extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <nav id="header" className="navbar navbar-default">
                <div className="container-fluid">
                    <div id="headerTitle">SparklingShan's Blog</div>
                </div>
            </nav>
        );
    };
}