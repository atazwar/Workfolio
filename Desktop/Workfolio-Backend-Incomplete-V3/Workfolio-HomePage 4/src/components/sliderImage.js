import React from 'react'

const SliderImage = ({ src }) => {
    let imageStyles = {
        width:100+"%",
        height: "auto"
    }
    return <img src={src} alt="slide-img" style={imageStyles}></img>
}

export default SliderImage;