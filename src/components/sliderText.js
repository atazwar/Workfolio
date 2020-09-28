import React from 'react'
import './sliderText.css'

function SliderText( {heading} ) {
    return (
        <div className="wrapper">
            <div className="inner">
                <h2>{heading}</h2>
            </div>
        </div>
    )
}

export default SliderText;