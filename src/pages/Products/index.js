import React from 'react'
import {Layout} from 'antd'
import ProductCategorySide from '../../components/pages/products/ProductCategorySide'
import ProductGrid from "../../components/pages/products/ProductGrid";
import 'antd/dist/antd.css';
import '../../components/pages/products/index.css';

const {Content, Sider} = Layout;

const Products = () => {

    return (<><Layout>
        <Sider theme={'light'} >
            <ProductCategorySide side={'left'}/>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <ProductGrid/>
        </Content>
    </Layout></>)

}

export default Products