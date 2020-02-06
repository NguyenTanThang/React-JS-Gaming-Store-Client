import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import OrderItem from "./orderItem";
import {connect} from "react-redux";
import {
    setLoading,
    clearLoading
} from "../../../actions/loadingActions";
import {MAIN_PROXY_URL} from "../../../config/config";

class OrderList extends Component{

    constructor(props){
        super(props);
        this.state = {
            orderItems: []
        }
    }

    componentDidMount(){
        axios.get(`${MAIN_PROXY_URL}/orders/all/` + this.props.userID)
        .then(response => {
            console.log(response);

            axios.get(`${MAIN_PROXY_URL}/test-orders/all/` + this.props.userID)
            .then(testResponse => {
                console.log(testResponse);

                this.setState({
                    orderItems: [...response.data.orders, ...testResponse.data.orders]
                })
            })
            
        })
    }
    
    render(){
         
        const orders = this.state.orderItems.map((orderItem, index) => {
            return <OrderItem key={index} index={index+1} orderItem={orderItem} />
        })
        
        return (
            <div className="container">
                <div className="row">
                    {orders}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userID: state.userReducers.userID
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoading: () => dispatch(setLoading()),
        clearLoading: () => dispatch(clearLoading()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(OrderList);