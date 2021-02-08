import React from 'react'
import './FooterStyles.css'

class Footer extends React.Component{
    render(){
        return(
            <div className='footer-container'>
                <p className='copy'>Store Proyect potatoeTeam &copy; 2021</p>
                <div className='sociales'>
                    <a href='https://www.mercadolibre.com.co/'>Mercado</a>
                    <a href='https://github.com/'>GIT</a>
                </div>
            </div>
        )
    }
}

export default Footer