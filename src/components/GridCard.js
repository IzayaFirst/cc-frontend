import React from 'react'
import { Link } from "react-router-dom";
import { truncateTitle, truncateDescription } from '../helpers/truncate'

const GridCard =  ({ id, name, image_url, description, price, brand_info }) => {
    return (
        <div className="card">
            <img src={image_url} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="card-brand-detail">
                    <div className="brand-element">
                        <img src={brand_info.url} className="brand-img" alt="..." />
                    </div>
                    <div className="brand-element">
                        <div className="card-title">
                            <span>{truncateTitle(name)}</span>
                        </div>
                    </div>
                </div>
                <div className="card-text brand-description">
                    <span>{truncateDescription(description)}</span>
                </div>
            </div>
            <div className="link-section">
            <div className="product-price">฿{price}</div>
                <Link to={`/product/${id}`}  className="btn btn-primary btn-main-cc">Detail</Link>
            </div>
        </div>
    )
}

export default GridCard