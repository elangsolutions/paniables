import React from 'react'
import {Image} from 'antd'

const ProducItemImage = ({src, width = 'auto', height = 'auto', maxWidth, maxHeight, borderRadius = '25px', preview = false}) => {

    const style = {
        width,
        height,
        'max-width': maxWidth,
        'max-height': maxHeight,
        'border-radius': borderRadius,
        'margin': 'auto'
    }

    return (<Image preview = {preview} src={`/img/icons/${src}`} alt={src} style={style} />)
}

export default ProducItemImage;