import React from 'react';
import './About.css'
import about1 from '../../images/about/about-1.png'
import about2 from '../../images/about/about-2.png'
import about3 from '../../images/about/about-3.png'
import about4 from '../../images/about/about-4.png'
import Footer from '../Shared/Footer/Footer';

const About = () => {
    return (
        <>
            <div className='about-container container'>
                <div className="about-content">
                    <h4>Medical Process</h4>
                    <h1>How our Medical works</h1>
                </div>
                <div className="about-cart row">
                    <div className="cart col-lg-3 text-center">
                        <div className="cart-img">
                            <img src={about1} alt="" />
                        </div>
                        <div className="cart-body">
                            <h2>Make Appointment</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut labore recusandae excepturi itaque eaque.</p>
                        </div>
                    </div>
                    <div className="cart col-lg-3 text-center">
                        <div className="cart-img">
                            <img src={about2} alt="" />
                        </div>
                        <div className="cart-body">
                            <h2>Select Doctor</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut labore recusandae excepturi itaque eaque.</p>
                        </div>
                    </div>
                    <div className="cart col-lg-3 text-center">
                        <div className="cart-img">
                            <img src={about3} alt="" />
                        </div>
                        <div className="cart-body">
                            <h2>Get Consultation</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut labore recusandae excepturi itaque eaque.</p>
                        </div>
                    </div>
                    <div className="cart col-lg-3 text-center">
                        <div className="cart-img">
                            <img src={about4} alt="" />
                        </div>
                        <div className="cart-body">
                            <h2>Get cure & Relief</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut labore recusandae excepturi itaque eaque.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default About;