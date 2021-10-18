import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../images/banner/banner-1.jpg'
import banner2 from '../../../images/banner/banner-2.jpg'
import banner3 from '../../../images/banner/banner-5.jpg'
import welcome from '../../../images/welcome-2.png'


const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img

                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img

                        className="d-block w-100 "
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img

                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="categories ">
                <div className="row">
                    <div className="col-lg-4">
                        <div className='single-categorie'>
                            <p><i class="fas fa-user-md"></i></p>
                            <h3>FIND OUR DOCTOR</h3>
                            <h4>Our Qualified Team Alaways Ready To Help Your</h4>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='single-service'>
                            <p><i class="fas fa-microscope"></i></p>
                            <h3>SEE OUR SERVICES</h3>
                            <h4>We Have Modern Medical Instrument</h4>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='single-categorie'>
                            <p><i class="fas fa-ambulance"></i></p>
                            <h3>OUR QUALIFIED TEAM</h3>
                            <h4>24/7 Medical Emergency Service Available</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="welcome-section container">
                <div className="row">
                    <div className="col-lg-5">
                        <div>
                            <img src={welcome} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className='welcome-content'>
                            <h2>Welcome to Our Medics Healthcare Clinic</h2>
                            <p>There are many variations ofWhy People Choose Our Clinic passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form Lorem Ipsum available</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div>
                                    <h5><span className='welcome-icon'><i class="fas fa-file-medical"></i></span> We're Certified</h5>
                                    <p>Lorem ipsu free dolor sit amet consectetur notted Ipsum available</p>
                                </div>
                                <div>
                                    <h5><span className='welcome-icon'><i class="fas fa-clinic-medical"></i></span> Years Experience</h5>
                                    <p>Lorem ipsu free dolor sit amet consectetur notted Ipsum available</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <h5><span className='welcome-icon'><i class="fas fa-stethoscope"></i></span> Latest Technology</h5>
                                    <p>Lorem ipsu free dolor sit amet consectetur notted Ipsum available</p>
                                </div>
                                <did>
                                    <h5><span className='welcome-icon'><i class="fas fa-capsules"></i></span> 100% Safe & Trusted</h5>
                                    <p>Lorem ipsu free dolor sit amet consectetur notted Ipsum available</p>
                                </did>
                            </div>
                        </div>
                        <button className='welcome-btn'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;