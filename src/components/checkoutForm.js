import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import Checkout from './checkout';
import {isNull} from "../validator/validator";

class CheckoutForm extends Component {

  componentWillMount(){
    console.log(this.props);

    if (localStorage.getItem("totalQuantity") === 0 || isNull(localStorage.getItem("totalQuantity"))){
        this.props.history.push("/");
    }

    if (isNull(localStorage.getItem("userID"))){
        this.props.history.push("/users/login");
    }
}

  render() {
    return (
      <StripeProvider apiKey="pk_test_zCHhDQRlYULSrArp9BJ390rC00NnAcrsz7">
        <div className="container">
          <Elements>
            <Checkout />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default CheckoutForm;