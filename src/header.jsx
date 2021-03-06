import React, { Component } from 'react';
import $ from 'jquery';
import {TweenMax} from 'gsap';

export default class Header extends Component {
    componentDidMount(){
        TweenMax.set('#headerTitle', {scaleX: 0, opacity: 0, transformOrigin: 'center'});
        TweenMax.to('#headerTitle', 1, {scaleX: 1, opacity: 1, transformOrigin: 'center'});
    }
    render() {
        return (
            <nav id="header" className="navbar navbar-default">
                <div className="container-fluid">
                    <div id="headerTitle">SparklingShan.</div>
                    <div className="navOwn" onClick={this.triggerNav.bind(this, 'outfits')}>Outfits</div>
                    <div className="navDivider">|</div>
                    <div className="navHome" onClick={this.triggerNav.bind(this, 'shop')}>Shop</div>
                </div>
            </nav>
        );
    };
    triggerNav(index){
        switch(index){
            case 'shop':
                $(window).trigger('navShop');
                $('.navOwn').css('color', '#555');
                $('.navHome').css('color', 'rgba(50,50,50,0.5)');
                $('.navHome').css('text-decoration', 'underline');
                $('.navOwn').css('text-decoration', 'none');
            break;
            case 'outfits':
                $(window).trigger('navOutfits');
                $('.navOwn').css('color', 'rgba(50,50,50,0.5)');
                $('.navHome').css('color', '#555');
                $('.navHome').css('text-decoration', 'none');
                $('.navOwn').css('text-decoration', 'underline');
            break;
        }
    }
}