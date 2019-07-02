import React , { Component, useState } from 'react'
import { connect } from 'react-redux'
import MainContainer from '../components/MainContainer'
import API from '../helpers/api'
import { setProductListAction } from '../actions/Product'

class Main extends Component {
    
    
    async componentDidMount() {
        try {
            const dataList = await API.getItemList()
            console.log('dataList', dataList.list)
            this.props.setProductList(dataList.list)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <MainContainer>
                <h1>
                    Hello world
                </h1>  
            </MainContainer>
        )
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        setProductList: (list) => {
            dispatch(setProductListAction({
                product_lists: list,
            }))
        }
    }
}

export default connect(null, mapDispatchToProps)(Main)