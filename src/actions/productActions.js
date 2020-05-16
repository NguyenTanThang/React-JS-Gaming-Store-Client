import {
    FETCH_PRODUCTS,
    GET_PRODUCT,
    FETCH_RELATED_PRODUCTS
} from "./types";
import axios from "axios";
import {
    setLoading,
    clearLoading
} from "./loadingActions";
import {MAIN_PROXY_URL} from "../config/config";

export const fetchRelatedProducts = (productID) => {
    return (dispatch) => {
        dispatch(setLoading());
        axios.get(`${MAIN_PROXY_URL}/products/by-genres/genres/${productID}`)
        .then(response => {
            dispatch({
                type: FETCH_RELATED_PRODUCTS,
                payload: {
                    productItems: response.data.products
                }
            })
            dispatch(clearLoading());
        })
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(setLoading());
        axios.get(`${MAIN_PROXY_URL}/products`)
        .then(response => {
            dispatch({
                type: FETCH_PRODUCTS,
                payload: {
                    productItems: response.data.products
                }
            })
            dispatch(clearLoading());
        })
    }
}

export const getProduct = (id) => {
    return (dispatch) => {
        dispatch(setLoading());
        axios.get(`${MAIN_PROXY_URL}/products/${id}`)
        .then(response => {
            dispatch({
                type: GET_PRODUCT,
                payload: {
                    productItem: response.data.product
                }
            })
            dispatch(clearLoading());
        })
    }
}
