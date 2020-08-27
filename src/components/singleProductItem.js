/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, {Component}  from "react";
import {
    getProduct,
    fetchRelatedProducts
} from "../actions/productActions";
import {
    addToCart
} from "../actions/cartActions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ProductList from "./productList";

class SingleProductItem extends Component{
    componentDidMount(){
        this.props.getProduct(this.props.match.params.id);
        //this.props.fetchRelatedProducts(this.props.match.params.id)
    }

    onAddToCart = () => {
        this.props.addToCart(this.props.productItem);
        this.props.history.push("/cart");
    }

    /*
    displayRelatedProducts = () => {
        const {relatedProductItems} = this.props;
        if (relatedProductItems.length === 0){
            return <h4>No related products</h4>
        }
        return <ProductList productItems={relatedProductItems} />
    }
    */

    render(){
        if (this.props.loading){
            return(
                <div className="container section-padding">
                    <div className="row">
                        <div className="m-auto col-6 text-center">
                            <img alt="Loading"
                            className="img-fluid"
                            src="/img/loading-gif.gif"/>
                        </div>
                    </div>
                </div>
            )
        } else {
            let displayGenres = [];
            let genres = [];
            let {_id, productName, productPrice, productDescription, productImgURL, productTrailerURL} = this.props.productItem;
            genres = this.props.productItem.genres

            if (genres) {
                displayGenres = genres.map(genreItem => {
                    console.log(genreItem.genre)
                    return <li>{genreItem.genre}</li>
                })
            }

            const trailer = productTrailerURL ? (<div className="col-lg-12 col-md-12 col-sm-12" style={{paddingTop:"40px"}}>
            <h2 className="section-header-details">Trailer</h2>
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title*/}
            <iframe width="100%" height="600" src={productTrailerURL} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
        </div>) : ("")

            return(
                <div className="container section-padding">
                <main>

                <section id="trailer">
                  <div className="container">
                    <iframe width="100%" height="400" src={productTrailerURL} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </section>
            
                <section id="small-about" className="section-padding movie-details-default-section">
                  <div className="container">
                    <div className="section-left">
                      <div className="movie-details-section-header">
                        <h2>Brief Description</h2>
                      </div>
                    </div>
                    <div className="section-center">
                      <p>{productName}</p>
                    </div>
                    <div className="section-right">
                      <div className="movie-details-utils">
                        <ul>
                          <li>
                            <button className="watch-button" onClick={this.onAddToCart}>ADD TO CART</button>
                          </li>
                        </ul>
            
                      </div>
                    </div>
                  </div>
                </section>
            
                <section id="big-about" className="section-padding movie-details-default-section">
                  <div className="container">
                    <div className="section-left">
                      <div className="movie-details-section-header">
                        <h2>About</h2>
                      </div>
                    </div>
                    <div className="section-right">
                      <div className="movie-details-container">
                        <ul>
                          <li>
                            <h5>Name</h5>
                            <p>{productName}</p>
                          </li>
                          <li>
                            <h5>Price</h5>
                            <p><sup>$</sup>{productPrice}</p>
                          </li>
                          <li>
                            <h5>Genres</h5>
                            <ul className="genre-list">
                                {displayGenres}
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="movie-plot-container">
                        <p>
                          {productDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        productItem: state.productReducers.productItem,
        loading: state.loadingReducers.loading,
        //relatedProductItems: state.productReducers.relatedProductItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProduct: (id) => dispatch(getProduct(id)),
        addToCart: (cartItem) => dispatch(addToCart(cartItem)),
        //fetchRelatedProducts: (id) => dispatch(fetchRelatedProducts(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductItem);