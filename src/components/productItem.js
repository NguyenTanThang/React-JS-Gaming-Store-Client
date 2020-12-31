import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {
    addToCart
} from "../actions/cartActions";
import {
    truncate
} from "../utils/utilities";

class ProductItem extends Component{
    onAddToCart = () => {
        this.props.addToCart(this.props.productItem);
        this.props.history.push("/cart");
    }

    render(){
        const {_id, productName, productPrice, productImgURL} = this.props.productItem;

        return (
            <div className="product-item">
                <Link to={`/products/${_id}`}> 
                    <div className="product-image">
                    <img src={productImgURL} alt={productName}/>
                        </div>
                    <div className="product-content">
                        <h4 className="product-name">{truncate(productName)}</h4>
                        <h3 className="product-price">${productPrice}</h3>
                    </div>
                </Link>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducers.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (cartItem) => dispatch(addToCart(cartItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);