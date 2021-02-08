import React from 'react'
import './CardOfferStyles.css'

class Card extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            description:"producto en promoción"
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({ 
                description:"precio del producto"
            })
        },5000)
    }

    render() {
        const { title, price, imgUrl } = this.props;
        return (
            <div className='card mx-auto'>
                <img src={imgUrl} alt='Avatar' className='image'/>
                <hr/>
                <div className='card-container'>
                    <h1>{title}</h1>
                    <p>{price}</p>
                    <p>{this.state.description}</p>
                    <button>Comprar</button>
                    <button>Añadir al carrito</button>
                </div>
            </div>
        )
    }
}

export default Card