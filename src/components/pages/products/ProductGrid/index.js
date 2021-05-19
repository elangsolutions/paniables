import React from 'react'
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import '../index.css';
import ProductItem from "../ProductItem";

const ProductGrid = () => {

    const productArray = [1,2,3,4,5]

    return (<>
        <Row gutter={[6, 6]} justify={'center'} >
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