import React, {Component} from "react";
import ProductItem from "./productItem";
import PropTypes from "prop-types";

class ProductList extends Component{
    render(){
        
        /*
        let productItems = [];
        if (this.props.productItems !== undefined){
            productItems = this.props.productItems
        }
        */

            return(
                    <div className="row justify-content-around">
                        {this.props.productItems.map((productItem) => {
                            return <ProductItem key={productItem._id} productItem={productItem}/> 
                        })}
                    </div>
            )
    }
}

ProductList.propTypes = {
    productItems: PropTypes.array
  };

export default ProductList;