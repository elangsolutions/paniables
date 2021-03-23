import React from 'react'
import Container from "../../common/Container";
import ProductCategorySideLeft from '../../components/pages/products/ProductCategorySide'
import ProductGrid from "../../components/pages/products/ProductGrid";
import {Row} from "antd";
import 'antd/dist/antd.css';
import '../../components/pages/products/index.css';

const Products = () => {

    return (<>
        <Container>
            <Row className ='container-row'>
                <ProductCategorySideLeft side={'left'}/>
                <ProductGrid/>
            </Row>
        </Container>
    </>)

}

export default Products