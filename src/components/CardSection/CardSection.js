import React from 'react'
import Card from '../CardOffer/CardOffer'
import imageurl from '../../images/image0.jpg'
import imageurl1 from '../../images/image1.jpg'
import imageurl2 from '../../images/image2.jpg'
import './CardSectionStyles.css'


class CardSection extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='CardSection'>
                    <h3>Ofertas semanales <a href=''>continuar viendo</a></h3>
                    <div id='container'>
                    <Card imgUrl={imageurl}></Card>
                    <Card imgUrl={imageurl1}></Card>
                    <Card imgUrl={imageurl2}></Card>
                    <Card imgUrl={imageurl2}></Card>
                    </div>
                </div>
            </div>
            )
    }
}

export default CardSection