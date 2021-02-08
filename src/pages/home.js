import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import CardSection from '../components/CardSection/CardSection'
import Slider from '../components/Slider/Slider'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'

import './homeStyles.css'


class Home extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <NavBar></NavBar>
                </header>
                <section>
                    <Banner></Banner>
                </section>
                <section>
                    <CardSection></CardSection>
                </section>
                <section>
                    <CardSection></CardSection>
                </section>
                <section>
                    <CardSection></CardSection>
                </section>
                <footer>
                    <Footer></Footer>
                </footer>
            </div>
        )
    }
}

export default Home