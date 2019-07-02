import React from 'react'
import { connect } from 'react-redux'
import RowCard from './RowCard'
import '../style/card.scss'

const RowContainer = ({ productList }) => {
    return (
        <div className="row" style={{ marginTop: '22px' }}>
            {productList.map((product, index) => {
                return (
                    <div className="col-sm-12" key={index}>
                        <RowCard {...product} />
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

export default connect(mapPropsToState, null)(RowContainer)
