import React from 'react';
import './SliderStyles.css'
import image0 from '../../images/image0.jpg'
import image1 from '../../images/image1.jpg'
import image2 from '../../images/image2.jpg'

class Slider extends React.Component{
    render(){
        return(
            <div id='slider-container'>
                <div id='slide-0' className='slide fade'>
                    <img src={image0} alt='img0'/>
                </div>
                <div id='slide-0' className='slide fade'>
                    <img src={image1} alt='img1'/>
                </div>
                <div id='slide-0' className='slide fade'>
                    <img src={image2} alt='img2'/>
                </div>
                <div id='arrows-wrapper'>
                    <p id='arrow-prev' class='slider-arrow center_y'>
                        &#10094;
                    </p>
                    <p id='arrow-next' class='slider-arrow center_y'>
                        &#10095;
                    </p>
                </div>
                <div id='dots-wrapper' className='center_x'>
                    <div class='dot-nav'></div>
                    <div class='dot-nav'></div>
                    <div class='dot-nav'></div>
                </div>
            </div>
            )
    }
}

export default Slider