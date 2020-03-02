import React, {Component} from "react";
import {Link} from "react-router-dom";
import {
    addByOneToCart,
    reduceByOneFromCart,
    removeFromCart
} from "../actions/cartActions";
import {connect} from "react-redux";

class CartItem extends Component{

    onRemoveFromCart = () => {
        this.props.removeFromCart(this.props.cartItem);
    }

    render(){
        const {_id, productName, productImgURL, productPrice, quantity, subTotal} = this.props.cartItem;
        return (
            <tr>
                <td>
                    <Link to={`/products/${_id}`}>
                        {productName}
                    </Link>
                </td>
                <td>
                    <img className="cart-product-img img-fluid" alt={productName} 
                    src={productImgURL}/>
                </td>
                <td>
                    {productPrice}$
                </td>
                <td>
                    {quantity}
                </td>
                <td>
                    {subTotal}$
                </td>
                <td>
                    <ul className="cart-button-list">
                        <li>
                            <button onClick={this.props.onRemoveFromCart} className="btn btn-danger">
                            Remove
                            </button>
                        </li>
                        <li>
                            <button onClick={this.props.onAddByOneToCart}className="btn btn-primary">
                            Add By One
                            </button>
                        </li>
                        <li>
                            <button onClick={this.props.onReduceByOneFromCart}className="btn btn-info">
                            Reduce By One
                            </button>
                        </li>
                    </ul>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (cartItem) =>  dispatch(removeFromCart(cartItem))
    }
}

export default connect(null, mapDispatchToProps)(CartItem);