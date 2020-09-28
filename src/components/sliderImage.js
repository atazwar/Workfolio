import React from 'react'

function SliderImage({ src }) {
    let imageStyles = {
        width:100+"%",
        height: "auto"
    }
    return <img src={src} alt="slide-img" style={imageStyles}></img>
}

export default SliderImage;