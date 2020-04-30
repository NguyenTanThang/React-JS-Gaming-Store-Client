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

export default CartItem;