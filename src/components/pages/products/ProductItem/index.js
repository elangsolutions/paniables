import React from 'react';
import {Card} from 'antd';
import PngImage from "../../../../common/PngImage";

const {Meta} = Card;

const ProductItem = (product) => {

    const defaultImage = 'diapers.png'
    const defaultDescription = 'Sin descripcion'

    const {title , description = defaultDescription, img = defaultImage, price, comment} = product
    return (
        <Card
            hoverable
            style={{width: 240}}
            cover={<PngImage alt={comment} src={img}/>}
        >
            <Meta title={title} description={description} price={price}/>
        </Card>
    )
}

export default ProductItem