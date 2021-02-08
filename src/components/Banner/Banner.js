import React from 'react'
import imgUrl from '../../images/image3.jpg'
import './BannerStyles.css'

class Banner extends React.Component {
    render() {
        return(
            <div id='banner'>
                <img src={imgUrl}/>
                <div className='container'>
                    <h2>Contenido del carrousel</h2>
                    <p>Mas contenido</p>
                </div>  
            </div>
            )
    }
}

export default Banner 