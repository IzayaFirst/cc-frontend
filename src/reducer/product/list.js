import { SET_PRODUCT_LIST } from '../../actions/Product'

const intialState = { product_lists: [] }

const ProductListReducer = (state = intialState, action) => {
        switch(action.type) {
            case SET_PRODUCT_LIST:
                const newState = Object.assign({}, state, action.payload)
                return newState
            default:
                return state
        }
}

export default ProductListReducer