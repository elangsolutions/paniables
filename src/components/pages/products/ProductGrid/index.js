import React from 'react'
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import '../index.css';
import ProductItem from "../ProductItem";

const ProductGrid = () => {

    const productArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

    return (<>
        <Row gutter={[16,16]} justify={'space-around'}>
            {
                productArray.map(product =>
                    (<Col span={6}>
                            <ProductItem/>
                    </Col>

                    ))
            }
        </Row>
    </>)
}

export default ProductGrid