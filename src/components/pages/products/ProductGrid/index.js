import React from 'react'
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import '../index.css';
import ProductItem from "../ProductItem";

const ProductGrid = () => {

    const productArray = []

    return (<>
        <Row gutter={[12, 12]} justify={'start'}>
            {
                productArray.map( product =>
                    (<Col span={6}>
                            <ProductItem/>
                        </Col>
                    ))
            }
        </Row>
    </>)
}

export default ProductGrid