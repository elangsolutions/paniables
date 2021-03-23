import React from 'react'
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import '../index.css';
import ProductItem from "../ProductItem";

const ProductGrid = () => {

    return (<>
        <Col>
            <Row>
                <Col>
                    <ProductItem/>
                </Col>
                <Col>
                    <ProductItem/>
                </Col>
                <Col>
                    <ProductItem/>
                </Col>
            </Row>
        </Col>
    </>)
}

export default ProductGrid