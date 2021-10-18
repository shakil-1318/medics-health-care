import React from 'react';
import logo from '../../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-section container">
                <div className="row">
                    <div className="col-lg-3">
                        <img src={logo} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsam tempora ipsum consequuntur sed explicabo?</p>
                        <span className='footer-icon'>
                            <i class="fab fa-facebook"></i>
                            <si class="fab fa-twitter-square"></si>
                            <i class="fab fa-linkedin"></i>
                            <i class="fab fa-youtube"></i>
                            <i class="fab fa-instagram-square"></i>
                        </span>
                    </div>
                    <div className="col-lg-3">
                        <h3>Department</h3>
                        <p>Surgery & Radiology</p>
                        <p>Children Care</p>
                        <p>Orthopedics</p>
                        <p>Nuclear Magnetic</p>
                        <p>Eye Treatment</p>
                        <p>X-Ray</p>
                    </div>
                    <div className="col-lg-3">
                        <h3>Opening Hours</h3>
                        <p>Mon-Tue: <span>6:00AM-10:00PM</span> </p> <hr />
                        <p>Wed-Thu: <span>6:00AM-10:00PM</span> </p> <hr />
                        <p>Fry: <span>6:00AM-04:00PM</span> </p> <hr />
                        <p>Sun: <span>Closed</span> </p>
                    </div>
                    <div className="col-lg-3">
                        <h3>Get In Touch</h3>
                        <p><b><span><i class="fas fa-phone-square"></i></span> Hotline:</b><br />
                            <small>Phone: +822456974</small>
                        </p>
                        <p><b><span><i class="fas fa-envelope"></i></span> Email:</b><br />
                            <small>hello@medics.com</small>
                        </p>
                        <p><b><span><i class="fas fa-map-marker-alt"></i></span> Address:</b><br />
                            <small>123, Western Road, Dhaka</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;