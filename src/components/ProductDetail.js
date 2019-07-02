import React , { useState } from 'react'
import { connect } from 'react-redux'
import '../style/button.scss'


const InputPrepend = ({ title, onClick }) => {
    return (
        <div className="input-group-prepend" style={{ cursor: 'pointer', }}>
            <a onClick={onClick} className="input-group-text" style={{ backgroundColor: '#fff', fontWeight: 700 }} >{title}</a>
        </div>
    )
}


const ProductDetail = ({ product }) => {
    console.log('product', product)
    const [amount, setAmount] = useState(1)
    return product && (
        <div className="row">
            <div className="col-sm-12 col-md-4">
                <div>
                    <img src={product ? product.image_url : ''} alt="product image" className="product-detail-image" />
                </div>
            </div>
            <div className="col-sm-12 col-md-8">
                <div className="card-detail">
                    <div className="product-detail-title">
                        {product ? product.name : ''}
                    </div>
                    <div className="product-detail-description">
                        {product ? product.description : ''}
                    </div>
                    <div className="product-detail-price">
                        ฿{product ? product.price : '0'}
                    </div>
                    <div className="input-group product-amount">
                        <InputPrepend onClick={() => {
                            setAmount(amount - 1 < 0 ? amount : amount - 1)
                        }} title="-"/>
                        <input type="number" value={amount} className="form-control" disabled/>
                        <InputPrepend onClick={() => { 
                            setAmount(amount + 1)}
                        } title="+"/>
                    </div>
                    <div className="product-detail-cart-submit">
                        <button className="btn btn-primary btn-cc">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        product: state.ProductDetail.product_detail
    }
}
export default connect(mapStateToProps, null)(ProductDetail)
