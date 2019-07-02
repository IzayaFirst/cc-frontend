import { combineReducers } from 'redux'
import ProductList from './product/list'
import ProductDetail from './product/detail'

export default combineReducers({
    ProductList,
    ProductDetail,
})
