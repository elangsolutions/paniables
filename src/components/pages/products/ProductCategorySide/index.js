import React from 'react'
import _ from 'lodash'
import {RightCircleOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import 'antd/dist/antd.css';
import '../index.css';
import categoryData from "../../../../content/pages/products/category"

const ProductCategorySide = () => {

    const {SubMenu} = Menu;


    const handleClick = e => {
        console.log('click ', e);
    };

    return (<>
            <Menu
                onClick={handleClick}
                style={{width: 200}}
                defaultSelectedKeys={['1']}
                mode="inline"
            >
                {categoryData.map(cat => {

                    const {key, title, subCategories} = cat;

                    return (<SubMenu key={key} icon={<RightCircleOutlined/>} title={title}>
                        {subCategories.map(subCat => {
                            const {key, title, items} = subCat;
                            return (<Menu.ItemGroup key={key} title={title}>
                                {_.map(items, item => (<Menu.Item key={item.key}>{item.title}</Menu.Item>))}
                            </Menu.ItemGroup>)
                        })}
                    </SubMenu>)
                })}
            </Menu>
        </>
    )

}


export default ProductCategorySide