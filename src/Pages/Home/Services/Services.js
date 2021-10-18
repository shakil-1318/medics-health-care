import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/service-data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div className="services-section container">
            <div className="service-content">
                <h5>Our Core Services</h5>
                <h3>Committed To Excelence</h3>
            </div>
            <div className="row service-container container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>

    );
};

export default Services;