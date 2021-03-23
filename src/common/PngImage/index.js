import React from 'react'

const PngImage = ({src, width, height, maxWidth, maxHeight, borderRadius = '25px'}) => {

    const style = {
        width,
        height,
        'max-width': maxWidth,
        'max-height': maxHeight,
        'border-radius': borderRadius
    }


    return (<img src={`/img/icons/${src}`} alt={src} style={style}/>)
}

export default PngImage;