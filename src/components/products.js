import React, { Component } from 'react';
import ProductList from "../components/productList";
import axios from "axios";
import Pagination from "./partials/pagination";
import paginate from "../utils/paginate";
import {MAIN_PROXY_URL} from "../config/config";
import searchLogic from "../utils/searchLogic";

class Products extends Component {

    state = {
        productItems: [],
        currentPage: 1,
        searched_name: "",
        min_price: null,
        max_price: null,
        defaultProductItems: []
    }
    
    componentDidMount(){
        axios.get(`${MAIN_PROXY_URL}/products`)
        .then(response => {
            this.setState({
                productItems: response.data.products,
                defaultProductItems: response.data.products
            })
        })
    }

    /*
    onSearchItemByName = (e) => {
        const itemName = e.target.value;

        if (!itemName){
            this.setState({
                productItems: this.state.defaultProductItems
            })
        } else {
            this.setState({
                productItems: this.state.productItems.filter(productItem => {
                    return productItem.productName.toLowerCase().includes(itemName.toLowerCase())
                })
            })
        }
    }
    */

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    changeCurrentPage = (pageNum) => {
        this.setState({
            currentPage: pageNum
        })
    }

    render() {
        let {productItems, currentPage, searched_name, min_price, max_price} = this.state;
        const {onChange} = this;

        productItems = searchLogic(productItems, {searched_name, min_price, max_price});

        const pageObject = paginate(productItems.length, currentPage, 6, 5);

        const currentChampionList = productItems.slice(pageObject.startIndex, pageObject.endIndex + 1);

        return (
            <section id="products" className="section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2>ALL PRODUCTS</h2>
                    </div>

                    <div className="container">
                        <div className="search-form-container">
                            <form>
                                <div className="form-group">
                                    <label>Item Name:</label>
                                    <input type="text" className="form-control" placeholder="Your Game's Name" onChange={onChange}
                                    id="searched_name"
                                    name="searched_name"
                                    value={searched_name}
                                    />
                                </div>

                                <div className="form-group row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <label>Min Price:</label>
                                        <input type="number" className="form-control" placeholder="Min Price" onChange={onChange}
                                        id="min_price"
                                        name="min_price"
                                        value={min_price}
                                        />
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <label>Max Price:</label>
                                        <input type="number" className="form-control" placeholder="Max Price" onChange={onChange}
                                        id="max_price"
                                        name="max_price"
                                        value={max_price}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <ProductList productItems={currentChampionList}/>

                <div className="container pagination-container">
                    <Pagination pageObject={pageObject} changeCurrentPage={this.changeCurrentPage}/>
                </div>

            </section>
        )
    }
}

export default Products;
