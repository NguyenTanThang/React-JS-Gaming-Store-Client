import React, {Component} from "react";
import {Link} from "react-router-dom";

class CartItem extends Component{
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
                            <button onClick={this.props.onAddByOneToCart}className="btn btn-primary">
                            <i className="fas fa-plus" aria-hidden="true"></i>
                            </button>
                        </li>
                        <li>
                            <button onClick={this.props.onRemoveFromCart} className="btn btn-danger">
                            <i className="fas fa-trash" aria-hidden="true"></i>
                            </button>
                        </li>
                        <li>
                            <button onClick={this.props.onReduceByOneFromCart}className="btn btn-info">
                            <i className="fas fa-minus" aria-hidden="true"></i>
                            </button>
                        </li>
                    </ul>
                </td>
            </tr>
        )
    }
}

export default CartItem;