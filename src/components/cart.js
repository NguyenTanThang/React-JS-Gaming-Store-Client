import React, {Component} from "react";
import {connect} from "react-redux";
import CartItem from "./cartItem";
import {
    addByOneToCart,
    reduceByOneFromCart,
    removeFromCart
} from "../actions/cartActions";
import {Link} from "react-router-dom";

class Cart extends Component{

    onAddByOneToCart = (cartItem) => {
        this.props.addByOneToCart(cartItem);
        this.props.history.push("/");
        this.props.history.push("/cart");
    }

    onReduceByOneFromCart = (cartItem) => {
        this.props.reduceByOneFromCart(cartItem);
        this.props.history.push("/");
        this.props.history.push("/cart");
    }

    onRemoveFromCart = (cartItem) => {
        this.props.removeFromCart(cartItem);
        this.props.history.push("/");
        this.props.history.push("/cart");
    }

    render(){
        if (this.props.cartItems.length == 0){
            return (
                <div className="cart">
                    <div className="container text-center  section-padding">
                        <h1>You currently has no item in cart</h1>
                        <Link to="/" className="mt-4 btn btn-lg btn-primary">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            )
        }
        return (
            <div className="cart">
                <div className="container section-padding">
                    <table className="table table-hovered table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Sub-Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.cartItems.map(cartItem => {
                                if (cartItem == null){
                                    return (<span></span>);
                                } else {
                                    return <CartItem key={cartItem._id} cartItem={cartItem} onAddByOneToCart={() => this.onAddByOneToCart(cartItem)} onReduceByOneFromCart={() => this.onReduceByOneFromCart(cartItem)}
                                    onRemoveFromCart={() => this.onRemoveFromCart(cartItem)}/>
                                }
                            })}
                            <tr>
                                <td colSpan="5" className="text-right"><b>Total</b></td>
                                <td>{this.props.totalPrice}$</td>
                            </tr>
                        </tbody>
                    </table>
                    <ul className="d-flex">
                        <li>
                            <Link className="btn btn-primary" to="/checkout">
                                Checkout
                            </Link>
                        </li>
                        <li>
                            <Link className="ml-2 btn btn-light" to="/">
                                Continue Shopping
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducers.cartItems,
        totalPrice: state.cartReducers.totalPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addByOneToCart: (cartItem) =>  dispatch(addByOneToCart(cartItem)),
        reduceByOneFromCart: (cartItem) =>  dispatch(reduceByOneFromCart(cartItem)),
        removeFromCart: (cartItem) =>  dispatch(removeFromCart(cartItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);