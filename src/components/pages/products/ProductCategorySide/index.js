import React from 'react'
import _ from 'lodash'
import {RightCircleOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import 'antd/dist/antd.css';
//import '../index.css';
//import categoryData from "../../../../content/pages/products/category"
import useCategories from "../../../../hooks/category/useCategories";

const ProductCategorySide = () => {

    const {SubMenu} = Menu;
    const {categories, loading} = useCategories("PANIABLES01");

    return (<>
        {loading ||
            <Menu
                style={{width: 200}}
                defaultSelectedKeys={['1']}
                mode="inline"
            >
                {categories.map(cat => {

                    const {code, name, subCategories} = cat;

                    return (<SubMenu key={code} icon={<RightCircleOutlined/>} title={name}>
                        {subCategories.map(subCat => {
                            const {code, name, subCategories} = subCat;
                            return (<Menu.ItemGroup key={code} title={name}>
                                {_.map(subCategories, item => (<Menu.Item key={item.code}>{item.name}</Menu.Item>))}
                            </Menu.ItemGroup>)
                        })}
                    </SubMenu>)
                })}
            </Menu>}
        </>
    )

}


export default ProductCategorySide