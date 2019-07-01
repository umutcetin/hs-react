import React, { Component } from 'react';

import img2 from '../assets/img/SLIDE_09b.jpg';
import img3 from '../assets/img/SLIDE_10c.jpg';

export class Carousel extends Component {
    render() {
        return (
            <div id="intro_carousel" className="carousel slide mt-3 pt-3" data-ride="carousel" data-interval="5000">
            <ol className="carousel-indicators">
                <li data-target="#intro_carousel" data-slide-to="0" className="active"></li>
                <li data-target="#intro_carousel" data-slide-to="1"></li>
                <li data-target="#intro_carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={require(`../assets/img/SLIDE_03a.jpg`)} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={img2} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={img3} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#intro_carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#intro_carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        )
    }
}

export default Carousel
