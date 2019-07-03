import React from 'react'
import { Link } from "react-router-dom";

const RowCard = ({ id, name, image_url, description, price, brand_info }) => {
    return (
        <div className="card">
            <div className="row no-gutters">
                <div className="col-sm-4 col-md-3">
                    <div className="row-brand">
                        <img src={image_url} className="card-img" alt="..." />
                    </div>
                </div>
                <div className="col-sm-6 col-md-7">
                    <div className="card-title row-brand">
                        <b>{name}</b>
                    </div>
                    <div className="card-text row-brand">
                        <span>{description}</span>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="link-section row-card">
                        <p className="product-price">฿{price}</p>
                        <Link to={`/product/${id}`} className="btn btn-primary btn-main-cc">Detail</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RowCard