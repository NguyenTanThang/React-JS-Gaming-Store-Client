import React, {Component} from "react";
import {CardElement, injectStripe} from 'react-stripe-elements';
import Axios from "axios";
import {connect} from "react-redux";
import {clearCart} from "../actions/cartActions";
import {MAIN_PROXY_URL} from "../config/config";

class Checkout extends Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
        complete: false,
        disabled: false
    };
  }

  async submit(ev) {
      this.setState({
          disabled: true
      })

      console.log(this.props.stripe);

      /*Live Stripe Version has been implemented yet due to the fact that I don't have a bank account */

      /* 
      Live Checkout
      */
     Axios.post(`${MAIN_PROXY_URL}/test-orders/add`, {
        user_id: localStorage.getItem("userID"),
        total: localStorage.getItem("totalPrice"),
        items: JSON.parse(localStorage.getItem("cartItems")),
    }).then(response => {
        console.log(response);

        alert("Total: " + localStorage.getItem("totalPrice"));
        
        this.props.clearCart();   
        this.setState({
            disabled: false
        })           
        window.location.replace("/");
    })
        
    

    /*
    Stripe Test Version

    // User clicked submit
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await Axios.post(`${MAIN_PROXY_URL}/checkout`, {
        token: token.id,
        totalPrice: localStorage.getItem("totalPrice"),
        cartItems: JSON.parse(localStorage.getItem("cartItems")),
        userID: localStorage.getItem("userID")
    });

    if (response.data.status == 'succeeded') {   
        this.props.clearCart();   
        this.setState({
            disabled: false
        })           
        this.props.history.push("/");
    }
    */

  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    const checkOutButton = this.state.disabled ? 
    (<button disabled className="mt-4 btn btn-primary" onClick={this.submit}>Purchase</button>)
    :
    (<button className="mt-4 btn btn-primary" onClick={this.submit}>Purchase</button>)

    return (
            <div className="row section-padding">
                <div className="m-auto col-lg-6 col-md-9 col-sm-12">
                    <p>Would you like to complete the purchase?</p>
                    <p>Test credit card number: 4242 4242 4242 4242</p>
                    <CardElement />
                    {checkOutButton}
                </div>
            </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart())
    }   
}

export default injectStripe(connect(null, mapDispatchToProps)(Checkout));