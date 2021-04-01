import React, { Component } from 'react';
import { Button } from './Button';
import './HeroSection.css'

class HeroSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className = "hero-container">
                <video src='/videos/video-1.mp4' autoPlay loop muted />
                <h1>Bienvenue</h1>
                <p> Qu'attendez vous ?</p>
                <div className = "hero-btns">
                    <Button className = "btns" buttonStyle = "btn--outline" buttonSize = "btn--large">
                        commancer
                    </Button>
                    <Button className = "btns" buttonStyle = "btn--primary" buttonSize = "btn--large">
                        voir la bande-annonce <i className = "far fa-play-circle"></i>
                    </Button>
                </div>
            </div>

        );
    }
}
 
export default HeroSection ;