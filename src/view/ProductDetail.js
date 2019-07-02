
import React, { Component } from 'react'
import { connect } from 'react-redux';
import MainContainer from '../components/MainContainer'
import BreadCrumb from '../components/BreadCrumb'
import { setProductDetailAction } from '../actions/Product'
import ProductDetailCard from '../components/ProductDetail'
import API from '../helpers/api'


class ProductDetail extends Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        const {
            props: {
                match: {
                    params: {
                        id = ''
                    }
                }
            }
        } = this
        try {
            const product = await API.getProductDetail(id)
            this.props.setProductDetail(product)
            console.log('productLists', product)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <MainContainer>
               <BreadCrumb />
               <ProductDetailCard />
            </MainContainer>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProductDetail: (detail) => {
            dispatch(setProductDetailAction({
                product_detail: detail,
            }))
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductDetail)