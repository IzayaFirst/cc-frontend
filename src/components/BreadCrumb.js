import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import '../style/breadcrumb.scss'

const BreadCrumb = ({ name = '1' }) => {
    return (
        <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{name}</li>
                    </ol>
                </nav>
    )
}

const mapStateToProps= (state) => {
    return {
        name: state.ProductDetail.product_detail ?state.ProductDetail.product_detail.name : ''
    }
}
export default connect(mapStateToProps, null)(BreadCrumb)