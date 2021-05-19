import React from 'react'

const SvgIcon = ({src, width = '100px', height = '100px', maxWidth, maxHeight, borderRadius = '25px'}) => {

        const style = {
            width,
            height,
            'max-width': maxWidth,
            'max-height': maxHeight,
            'border-radius': borderRadius
        }


        return (<img src={`/img/svg/${src}`} alt={src} style={style}/>)
    }
;

export default SvgIcon;
