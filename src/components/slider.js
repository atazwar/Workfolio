import React, { useState } from 'react'
import './slider.scss'
import SliderImage from './sliderImage'
import SliderText from './sliderText'
import ProfileCard from './profileCard'
import ProfileCardLayout from './profileCardLayout'
// import i1 from './pics'

function Slider() {
    let sliderArr = [<SliderText heading="Welcome to Workfolio" />,
                    <ProfileCardLayout />,
                    3,4,
                    <SliderText heading="Join Workfolio and Let The World Discover You!" />]
    const [x, setX] = useState(0)

    const goLeft = () => {
        (x === 0) ? setX(-100*(sliderArr.length-1)) : setX(x + 100);
    };

    const goRight = () => {
        (x === -100*(sliderArr.length-1)) ? setX(0) : setX(x - 100);
    };


    return (
        <div className="slider">
            {sliderArr.map((item, index) => {
                return (
                    <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                        {item}
                    </div>
                    )
            })}
            <button id="goLeft" onClick={goLeft}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <button id="goRight" onClick={goRight}>
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default Slider;
