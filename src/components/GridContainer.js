import React from 'react'
import { connect } from 'react-redux'
import GridCard from './GridCard'
import '../style/card.scss'

const GridContainer = ({ productList }) => {
    return (
    <div className="row" style={{ marginTop: '22px' }}>
        {productList.map((product, index) => {
            return (
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                    <GridCard {...product} />
                </div>
            )
        })}
    </div>)
}
const mapPropsToState = (state) => {
    return {
        productList: state.ProductList.product_lists
    }
}

export default connect(mapPropsToState, null)(GridContainer)
