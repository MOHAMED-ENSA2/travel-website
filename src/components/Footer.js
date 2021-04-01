import React, { Component } from 'react';
import './Footer.css'
import {Link} from 'react-router-dom'


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
           <div className = "footer">
           <footer className = "footer-container">
               <div>
                     <h3>Rejoigner nous pour resevoir les meilleurs offres</h3>
                    <form action="/">
                        <input type="text" placeholder = "votre email" />
                        <input type="submit"  value = "S'abboner"/>
                    </form>
               </div>
               

                 <div className="footer-links" >
                     <ul>
                         <li>Que nous somme ?</li> 
                         <li>text</li>
                         <li>text</li>
                         <li>text</li>
                         <li>text</li>
                         <li>text</li>
                     </ul>
                     <ul>
                         <li>Que nous somme ?</li>
                         <li>text</li>
                         <li>text</li>
                         <li>text</li>
                         <li>text</li>
                         <li>text</li>
                     </ul>
                     <ul>
                         <li>Que nous somme ?</li>
                         <li>text</li>
                         <li>text</li>
                         <li>text</li>
                         <li>text</li>
                         <li>text</li>
                     </ul>
                     <ul>
                         <li>Que nous somme ?</li>
                         <li>text</li>
                         <li>text</li>
                         <li>text</li>
                         <li>text</li>
                         <li>text</li>
                     </ul>
                 </div>
                 <div className="contact-details">
                     <div>
                        <Link to = '/' className = "footer-logo">
                            TRVL <i className="fa fa-plane"></i>

                        </Link>


                     </div>

                    <div>
                        TRVL <i class="fa fa-copyright" aria-hidden="true"></i> 2020
                    </div>

                    <div className="social">

                    <a href="https://www.twitter.com" target= "_blank"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com" target= "_blank"><i class="fab fa-facebook"></i></a>
                    <a href="https://instagram.com" target= "_blank"><i class="fab fa-instagram"></i></a>
                    

                    </div>



                 </div>



           </footer>
           </div>
         );
    }
}
 
export default Footer;