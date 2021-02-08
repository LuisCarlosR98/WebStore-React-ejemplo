import React from 'react'
import './NavBarStyles.css'
import '../Styles/fontello.css'
import Card from '../CardOffer/CardOffer'

class NavBar extends React.Component{
    render(){
        return(
            <div className='head'>
                <div className='container'>
                    <h1 className='icon-logo'></h1>
                    <h1 id='text-title'>StoreApp</h1>
                    <div className='search'>
                        <input type='text' className='search-text' placeholder='Necesito esto...'/>
                        <a href='' id='button-search' className='icon-search'></a>
                    </div>
                    <input type='checkbox' id='menu-bar'/>
                    <label className='icon-menu' for='menu-bar'></label>
                    <nav className='menu'>
                        <a href='#'>Carrito</a>
                        <a href='#'>Perfil</a>
                    </nav>
                </div>
                <div className='subnav'>
                    <a id='category'>Categorias<a className='icon-down-dir'></a> </a>
                    <a id='brands'>Marcas <a className='icon-down-dir'></a></a>
                </div>
            </div>
            )
    }
}

export default NavBar