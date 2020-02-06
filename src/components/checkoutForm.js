import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import Checkout from './checkout';

class CheckoutForm extends Component {
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