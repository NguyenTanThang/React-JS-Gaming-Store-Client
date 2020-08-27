import React, { Component } from 'react';
import ProductList from "./productList";
import HomeAbout from "./partials/HomeAbout";
import HomeCarousel from "./partials/HomeCarousel";
import {Link} from "react-router-dom";
import axios from "axios";
import {MAIN_PROXY_URL} from "../config/config";

class Home extends Component {

    state = {
        productItems: []
    }

    componentWillMount(){
        axios.get(`${MAIN_PROXY_URL}/products`)
        .then(response => {
            this.setState({
                productItems: response.data.products.slice(0, 8)
            })
        })
    }

    render() {
        return (
            <div>
                <div className="home-banner">
                    <HomeCarousel/>
                </div>

                <section id="featured" className="section-padding">
                    <div className="container">
                        <div className="section-header">
                            <h2>FEATURED BRANDS</h2>
                        </div>

                        <div className="row align-items-center justify-content-between">

                            <div className="col-lg-2 col-md-5 col-sm-12 feature-item">
                                <img className="img-fluid" src="/img/rockstar-icon-img.png" alt="Rockstar Icon"/>
                            </div>

                            <div className="col-lg-2 col-md-5 col-sm-12 feature-item">
                                <img className="img-fluid" src="/img/ea-icon-img.png" alt="EA Icon"/>
                            </div>

                            <div className="col-lg-2 col-md-5 col-sm-12 feature-item">
                                <img className="img-fluid" src="/img/ubisoft-icon-img.png" alt="Ubisoft Icon"/>
                            </div>

                            <div className="col-lg-2 col-md-5 col-sm-12 feature-item">
                                <img className="img-fluid" src="/img/capcom-icon-img.jpg" alt="Capcom Icon"/>
                            </div>
                        
                        </div>
                    </div>
                </section>

                <section id="about" className="section-padding">
                    <div className="container">
                        <div className="section-header">
                            <h2>ABOUT US</h2>
                        </div>
                    
                        <HomeAbout/>
                    </div>
                </section>

                <section id="home-product-list" className="section-padding">
                    <div className="container">
                        <div className="section-header">
                            <h2>FEATURED PRODUCTS</h2>
                        </div>
                    </div>

                    <ProductList productItems={this.state.productItems}/>

                    <div className="text-center mt-4">
                        <Link to="/products" className="btn btn-dark">VIEW MORE</Link>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
