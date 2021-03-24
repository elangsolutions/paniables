import React from 'react'
import {Image} from 'antd/lib/index'

const ProducItemImage = ({src, width = 200, height = 200, maxWidth, maxHeight, borderRadius = '25px'}) => {

    const style = {
        width,
        height,
        'max-width': maxWidth,
        'max-height': maxHeight,
        'border-radius': borderRadius
    }

    return (<Image src={`/img/icons/${src}`} alt={src} style={style} />)
}

export default ProducItemImage;