import React, { Component } from 'react';
import logo from '../assets/img/homestudio_logo_2017.png';

export class Header extends Component {
    render() {
        return (
            <div id="intro">
                <nav id="menu" className="navbar navbar-expand-md header ">
            <a className="navbar-brand" href="#intro">
                <img src={logo} alt="logo" className="logo"></img>
            </a>
            <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"> <a className="nav-link" href="#sect01">Atölyeler</a> </li>
                    <li className="nav-item"> <a className="nav-link" href="#sect02">Grup Koçluğu</a> </li>
                    <li className="nav-item"> <a className="nav-link" href="#sect03">EĞİTMENLER</a> </li>
                    <li className="nav-item"> <a className="nav-link" href="#about">Hakkımızda</a> </li>
                    <li className="nav-item"> <a className="nav-link" href="#contact">İLETİŞİM</a> </li>
                </ul>
            </div>
        </nav>
            </div>
        )
    }
}

export default Header
