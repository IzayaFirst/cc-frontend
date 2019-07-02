import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainContainer from '../components/MainContainer'
import API from '../helpers/api'
import { setProductListAction } from '../actions/Product'
import GridContainer from '../components/GridContainer';
import RowContainer from '../components/RowContainer';
import Footer from '../components/Footer'
import '../style/button.scss'

class Main extends Component {

    constructor(props) {
        super(props)
        this.selectGridMode = this.selectGridMode.bind(this)
        this.selectRowMode = this.selectRowMode.bind(this)
    }

    state = {
        selectViewMode: 1,
    }

    async componentDidMount() {
        try {
            const dataList = await API.getItemList()
            this.props.setProductList(dataList.list)
            console.log('productLists', this.props.productLists)
        } catch (err) {
            console.log(err)
        }
    }

    selectGridMode() {
        this.setState({
            selectViewMode: 1,
        })
    }

    selectRowMode() {
        this.setState({
            selectViewMode: 2,
        })
    }

    render() {
        return (
            <div>
            <MainContainer>
                <div className="title">
                    CC FrontEnd
                </div>
                <div className="select-view-menu">
                    <button onClick={this.selectGridMode} className={
                        this.state.selectViewMode == 1 ? 'icon-button left-icon  icon-selected' : 'icon-button left-icon'
                    }>
                        <span><i className="fa fa-th" /></span>
                    </button>
                    <button onClick={this.selectRowMode} className={
                        this.state.selectViewMode == 2 ? 'icon-button right-icon icon-selected' : 'icon-button right-icon '
                    }>
                        <span><i className="fa fa fa-list" /></span>
                    </button>
                </div>
                {this.state.selectViewMode == 1 && (<GridContainer />)}
                {this.state.selectViewMode == 2 && (<RowContainer />)}
            </MainContainer >
            <Footer />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setProductList: (list) => {
            dispatch(setProductListAction({
                product_lists: list,
            }))
        }
    }
}

export default connect(null, mapDispatchToProps)(Main)