import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Service = (props) => {
    const { id, name, description, img } = props.service;
    return (

        <div className="col-lg-4 g-5">
            <Card className='h-100'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title> <br />
                    {id}
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/detail/${id}`}>
                        <Button variant="primary">Go somewhere</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Service;