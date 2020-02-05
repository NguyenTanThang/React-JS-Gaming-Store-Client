import React, { Component } from 'react';
import ProductList from "../components/productList";
import axios from "axios";
import Pagination from "../components/partials/pagination";
import {MAIN_PROXY_URL} from "../config/config";

class Products extends Component {

    state = {
        productItems: []
    }
    
    componentWillMount(){
        axios.get(`${MAIN_PROXY_URL}/products`)
        .then(response => {
            this.setState({
                productItems: response.data.products
            })
        })
    }

    render() {
        return (
            <section id="products" className="section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2>ALL PRODUCTS</h2>
                    </div>

                    <div className="row">

                    </div>
                </div>

                <ProductList productItems={this.state.productItems}/>

            </section>
        )
    }
}

export default Products;
