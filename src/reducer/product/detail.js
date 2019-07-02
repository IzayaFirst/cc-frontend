import { SET_PRODUCT_DETAIL } from '../../actions/Product'

const intialState = { product_detail: null }

const ProductDetailReducer = (state = intialState, action) => {
        switch(action.type) {
            case SET_PRODUCT_DETAIL:
                const newState = Object.assign({}, state, action.payload)
                return newState
            default:
                return state
        }
}

export default ProductDetailReducer