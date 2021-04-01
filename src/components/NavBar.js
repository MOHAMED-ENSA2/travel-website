import React, { Component}  from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css'
import {Button} from './Button'

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = { 
          click : false ,
          button : true

         };

    }


    handleClick = () => this.setState({click : !this.state.click})

    closeMobileMenu = () => { this.setState({ click : false})  ; console.log("clicked")}
    
    showButton = () => {
        if (window.innerWidth <= 960) {
            this.setState({button : false})
        }
        else {
            this.setState({button : true})

        }
    }
    responsive_button = () => {
        window.addEventListener('resize', this.showButton);    

    }
    componentDidMount(){
        this.showButton();
    }


    
    render() { 
        const click = this.state.click
        const button = this.state.button
        this.responsive_button();
        return ( 
            <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to = '/' className = "navbar-logo" onClick = {this.closeMobileMenu}>
                        TRVL <i className="fa fa-plane"></i>

                    </Link>
                    <div className="menu-icon" onClick = {this.handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to = '/' className = 'nav-links' onClick = {this.closeMobileMenu} >
                                Home          
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = '/services' className = 'nav-links' onClick = {this.closeMobileMenu} >
                                Service         
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = '/products' className = 'nav-links' onClick = {this.closeMobileMenu} >
                                Product          
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = '/SignUp' className = 'nav-links-mobile' onClick = {this.closeMobileMenu} >
                                Sign up         
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle = "btn--outline">Sign Up</Button>}
                </div>
            </nav>
            </>

         );
    }
}
 
export default NavBar;




  