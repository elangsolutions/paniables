import React from 'react';
import {Card} from 'antd';
import PngImage from "../ProductItemImage";

const {Meta} = Card;

const ProductItem = (product) => {

    const defaultImage = 'diapers.png'
    const defaultDescription = 'Sin descripcion'

    const {title , description = defaultDescription, img = defaultImage, price, comment} = product
    return (
        <Card
            hoverable
            bordered={false}
            style={{ width: 240 , height: 300   }}
            // cover={<PngImage alt={comment} src={defaultImage}/>}
        />
    )
}

export default ProductItem