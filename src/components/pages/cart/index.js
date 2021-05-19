import React, {useState} from 'react'
import {Modal} from 'antd'
import {useSelector} from 'react-redux'
import OrderItem from "./orderItem";

const Cart = () => {

    const [visible, setVisible] = useState(true);

    const order = useSelector(state => state.order)

    const {list = []} = order;

    return (<Modal
        title="Tus artículos:"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={400}
        cancelText={"Volver"}
        okText={"Encargar"}


    >
        {list.length ? list.map(item => (<OrderItem item={item}/>)) : <span>Aun no tenes ningún articulo</span>}
    </Modal>)
}

export default Cart