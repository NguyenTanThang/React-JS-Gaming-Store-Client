import React, { Component } from 'react';
import ProductList from "../components/productList";
import axios from "axios";
import Pagination from "./partials/pagination";
import paginate from "../utils/paginate";
import {MAIN_PROXY_URL} from "../config/config";

class Products extends Component {

    state = {
        productItems: [],
        currentPage: 1,
        itemName: "",
        defaultProductItems: []
    }
    
    componentWillMount(){
        axios.get(`${MAIN_PROXY_URL}/products`)
        .then(response => {
            this.setState({
                productItems: response.data.products,
                defaultProductItems: response.data.products
            })
        })
    }

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

    changeCurrentPage = (pageNum) => {
        this.setState({
            currentPage: pageNum
        })
    }

    render() {
        const {productItems, currentPage} = this.state;

        const pageObject = paginate(productItems.length, currentPage, 6, 5);

        const currentChampionList = this.state.productItems.slice(pageObject.startIndex, pageObject.endIndex + 1);

        console.log(pageObject);

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
                                    <input type="text" className="form-control" placeholder="Your Game's Name" onChange={this.onSearchItemByName}/>
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
