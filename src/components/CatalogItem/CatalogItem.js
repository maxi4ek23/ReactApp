import { Card } from "antd";
import React from "react";
import './CatalogItem.css'


const CatalogItem = ({ type, text, location, image, price }) => {
    return (
        <Card
            hoverable
            style={{ width: 300, borderRadius: "20px" }}
            cover={
                <img className="item__img" alt="example" src={image} />
            }
        >
            <div className="item__info">
                <h2 className="item__type">{type}</h2>
                <div className="item__description">{text}</div>
                <h3 className="item__location">{location}</h3>
                <p className="item__price">price: ${price}</p>
                <button className="item__button">Show More</button>
            </div>
        </Card>
    );
}

export default CatalogItem;