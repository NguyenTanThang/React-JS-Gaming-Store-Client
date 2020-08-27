import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import {Link} from "react-router-dom";

class HomeCarousel extends Component {
    componentDidMount() {
       
    }

    render() {

        const options = {
            items: 1,
            nav: true,
            rewind: true,
            autoplay: true,
            dots: true,
            navText: [`<div class="carousel-nav left-nav">
                <i class="fas fa-chevron-left"></i>
            </div>`,`<div class="carousel-nav right-nav">
                <i class="fas fa-chevron-right"></i>
            </div>`],
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:false
                }
            }
        };

        return (
            <div className="main-carousel">
                <OwlCarousel ref="car" options={options} >

                    <div className="item">
                        <img src={"https://assets1.ignimgs.com/2020/05/14/ghost-of-tsushima-preorder-1589487241577.jpg"} />
                        <div className="slider-content">
                            <h2>Ghost of Tsushima</h2>
                            <Link to="/">TAKE A LOOK</Link>
                        </div>
                    </div>

                    <div className="item">
                        <img src={"https://i.pinimg.com/originals/e4/c9/75/e4c975e018f501b52eefaed696c4a3ff.jpg"} />
                        <div className="slider-content">
                            <h2>Sekiro: Shadows Die Twice</h2>
                            <Link to="/">TAKE A LOOK</Link>
                        </div>
                    </div>

                    <div className="item">
                        <img src={"https://wallpaperaccess.com/full/188963.jpg"} />
                        <div className="slider-content">
                            <h2>Dark Souls 2</h2>
                            <Link to="/">TAKE A LOOK</Link>
                        </div>
                    </div>

                    <div className="item">
                        <img src={"https://images2.alphacoders.com/509/thumb-1920-509156.jpg"} />
                        <div className="slider-content">
                            <h2>Mafia 2</h2>
                            <Link to="/">TAKE A LOOK</Link>
                        </div>
                    </div>

                    <div className="item">
                        <img src={"https://cdn.suwalls.com/wallpapers/games/sleeping-dogs-16040-1920x1200.jpg"} />
                        <div className="slider-content">
                            <h2>Sleeping Dogs</h2>
                            <Link to="/">TAKE A LOOK</Link>
                        </div>
                    </div>

                </OwlCarousel>
            </div>
        )
    }
}

export default HomeCarousel;