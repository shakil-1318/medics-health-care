import React from 'react';
import './Price.css'
import logo1 from '../../images/price/price-1.png'
import logo2 from '../../images/price/price-2.png'
import logo3 from '../../images/price/price-3.png'
import Footer from '../Shared/Footer/Footer';

const Price = () => {
    return (
        <>
            <div className='price-container container'>
                <div className="price-content text-center m-5">
                    <h3>Pricing Tables</h3>
                    <h1>See Our Pricing Plans</h1>
                </div>
                <div className="price-cart row ">
                    <div className="cart col-lg-4 text-center">
                        <div>
                            <div className="cart-logo">
                                <img src={logo1} alt="" />
                            </div>
                            <div className="cart-body">
                                <h1>35<sup>$</sup><sub>/Monthly</sub> </h1>
                                <h2>Starter Plan</h2> <hr />
                                <p>Corona Test</p>
                                <p>Urine Routine Analysis</p>
                                <p>ECG Resting</p> <hr />
                                <button className='btn'>Select Plan</button>
                            </div>
                        </div>
                    </div>
                    <div className="cart col-lg-4 text-center">
                        <div>
                            <div className="cart-logo">
                                <img src={logo2} alt="" />
                            </div>
                            <div className="cart-body">
                                <h1>35<sup>$</sup><sub>/Monthly</sub> </h1>
                                <h2>Starter Plan</h2> <hr />
                                <p>Corona Test</p>
                                <p>Urine Routine Analysis</p>
                                <p>ECG Resting</p> <hr />
                                <button className='btn'>Select Plan</button>
                            </div>
                        </div>
                    </div>
                    <div className="cart col-lg-4 text-center">
                        <div>
                            <div className="cart-logo">
                                <img src={logo3} alt="" />
                            </div>
                            <div className="cart-body">
                                <h1>35<sup>$</sup><sub>/Monthly</sub> </h1>
                                <h2>Starter Plan</h2> <hr />
                                <p>Corona Test</p>
                                <p>Urine Routine Analysis</p>
                                <p>ECG Resting</p> <hr />
                                <button className='btn'>Select Plan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Price;