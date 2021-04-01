import React, { Component } from 'react';
import '../../App.css'
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <>
            <HeroSection/>
            <Cards/>
            <Footer/>
            </>
          );
    }
}
 
export default Home;