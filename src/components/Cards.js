import React, { Component } from 'react';
import CardItem from './CardItem';
import './Cards.css'

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="cards">
                <h1>
                    decouvrez des destinatation incroyable
                </h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem 
                            src ="/images/img-1.jpg"
                            text = "some text here some text here some text here"
                            label = "titre"
                            path = "/services"
                            />
                             <CardItem 
                            src ="/images/img-2.jpg"
                            text = "some text here some text here some text here"
                            label = "titre"
                            path = "/services"
                            />

                        </ul>

                        <ul  className="cards__items">

                            <CardItem 
                                src ="/images/img-3.jpg"
                                text = "some text here some text here some text here"
                                label = "titre"
                                path = "/services"
                                />
                            <CardItem 
                            src ="/images/img-4.jpg"
                            text = "some text here some text here some text here"
                            label = "titre"
                            path = "/services"
                            />
                            
                            <CardItem 
                                src ="/images/img-3.jpg"
                                text = "some text here some text here some text here"
                                label = "titre"
                                path = "/services"
                                />
                            <CardItem 
                            src ="/images/img-4.jpg"
                            text = "some text here some text here some text here"
                            label = "titre"
                            path = "/services"
                            />

                        </ul>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Cards;