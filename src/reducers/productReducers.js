import {
    FETCH_PRODUCTS,
    GET_PRODUCT,
    FETCH_RELATED_PRODUCTS
} from "../actions/types";

const initialState = {
    productItems: [],
    productItem: {},
    relatedProductItems: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                productItems: action.payload.productItems
            }
            break;
            case FETCH_RELATED_PRODUCTS:
                return {
                    ...state,
                    relatedProductItems: action.payload.productItems
                }
                break;
        case GET_PRODUCT:
            return {
                ...state,
                productItem: action.payload.productItem
            }
            break;
        default:
            return state;
            break;
    }
}

export default productReducer;