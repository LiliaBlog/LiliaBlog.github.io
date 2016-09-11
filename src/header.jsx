import React, { Component } from 'react';

export default class Header extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <nav id="header" className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand"><b>SparklingShan's Blog</b></a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a onClick={}>About me</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };
}